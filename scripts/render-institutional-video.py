#!/usr/bin/env python3
"""
Produtor programático do vídeo institucional "Quem sou e o que faço — Paloma Vidal".
Gera:
  - public/videos/paloma-vidal-video-institucional-web.mp4 (1280x720 otimizado para web)
  - public/videos/paloma-vidal-video-institucional-poster.webp (capa 1280x720)
  - private-deliverables/video/paloma-vidal-video-institucional-fullhd.mp4 (1920x1080)
  - private-deliverables/video/paloma-vidal-video-institucional-reels.mp4 (1080x1920 vertical)
Utiliza exclusivamente fotografias reais (FOTOS/1..4.jpeg) e logomarca oficial.
"""
import math
import os
import subprocess
import wave
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageOps

BORDO = (68, 18, 30)
BORDO_ESCURO = (53, 15, 26)
DOURADO = (232, 214, 148)
DOURADO_ESCURO = (125, 100, 40)
MARFIM = (250, 247, 242)
BEGE = (217, 200, 184)
GRAFITE = (41, 35, 38)

FPS = 24
DURATION = 60.0
TOTAL_FRAMES = int(FPS * DURATION)


def find_font(candidates, size):
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


SERIF_PATHS = [
    r"C:\Windows\Fonts\georgia.ttf",
    r"C:\Windows\Fonts\times.ttf",
]
SERIF_BOLD_PATHS = [
    r"C:\Windows\Fonts\georgiab.ttf",
    r"C:\Windows\Fonts\timesbd.ttf",
]
SERIF_ITALIC_PATHS = [
    r"C:\Windows\Fonts\georgiai.ttf",
    r"C:\Windows\Fonts\timesi.ttf",
]
SANS_PATHS = [
    r"C:\Windows\Fonts\segoeui.ttf",
    r"C:\Windows\Fonts\calibri.ttf",
    r"C:\Windows\Fonts\arial.ttf",
]
SANS_BOLD_PATHS = [
    r"C:\Windows\Fonts\segoeuib.ttf",
    r"C:\Windows\Fonts\calibrib.ttf",
    r"C:\Windows\Fonts\arialbd.ttf",
]


def ease_out(x):
    x = max(0.0, min(1.0, x))
    return 1.0 - (1.0 - x) ** 3


def blend_color(c1, c2, alpha):
    a = max(0.0, min(1.0, alpha))
    return tuple(int(c1[i] * (1.0 - a) + c2[i] * a) for i in range(3))


def generate_ambient_audio(wav_path: str, duration: float = 60.0, sr: int = 44100):
    """Sintetiza trilha instrumental ambiente suave e original (acordes quentes, sem direitos autorais)."""
    n = int(sr * duration)
    t = np.linspace(0.0, duration, n, endpoint=False)
    signal = np.zeros(n, dtype=np.float64)

    # Progressão calma de 6 segundos por acorde (Ré maior / Lá / Si menor / Sol)
    chords = [
        [146.83, 220.00, 293.66, 369.99],  # D major
        [110.00, 220.00, 277.18, 329.63],  # A major
        [123.47, 246.94, 293.66, 369.99],  # B minor
        [196.00, 246.94, 293.66, 392.00],  # G major
    ]
    seg_dur = 6.0
    num_segs = int(math.ceil(duration / seg_dur))
    for s in range(num_segs):
        start = int(s * seg_dur * sr)
        end = min(n, int((s + 1) * seg_dur * sr))
        seg_t = t[start:end] - s * seg_dur
        L = end - start
        if L <= 0:
            continue
        # Envelope suave de entrada/saída por acorde
        env = np.sin(np.pi * np.clip(seg_t / seg_dur, 0.0, 1.0)) ** 0.7
        chord = chords[s % len(chords)]
        seg_wave = np.zeros(L, dtype=np.float64)
        for idx, freq in enumerate(chord):
            amp = 0.16 if idx == 0 else 0.11
            seg_wave += amp * np.sin(2.0 * np.pi * freq * seg_t)
            seg_wave += (amp * 0.25) * np.sin(2.0 * np.pi * (freq * 2.0) * seg_t)
        signal[start:end] += seg_wave * env

    # Fade in 2.5s / Fade out 3.5s
    fade_in = int(2.5 * sr)
    fade_out = int(3.5 * sr)
    signal[:fade_in] *= np.linspace(0.0, 1.0, fade_in)
    signal[-fade_out:] *= np.linspace(1.0, 0.0, fade_out)

    # Normaliza em volume confortável e discreto
    peak = np.max(np.abs(signal)) or 1.0
    pcm = (signal / peak * 0.28 * 32767.0).astype(np.int16)
    with wave.open(wav_path, "wb") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sr)
        wf.writeframes(pcm.tobytes())


def load_assets():
    logo = Image.open("public/images/logo/logo-horizontal.png").convert("RGB")
    photos = {}
    for k, p in [
        ("1", "FOTOS/1.jpeg"),
        ("2", "FOTOS/2.jpeg"),
        ("3", "FOTOS/3.jpeg"),
        ("4", "FOTOS/4.jpeg"),
    ]:
        im = ImageOps.exif_transpose(Image.open(p).convert("RGB"))
        photos[k] = im
    return logo, photos


def crop_ken_burns(im: Image.Image, target_w: int, target_h: int, progress: float, focus_y: float = 0.22):
    """Recorte suave com leve zoom (Ken Burns) sem deformar proporções nem cortar rosto."""
    zoom = 1.0 + 0.055 * progress
    iw, ih = im.size
    target_ratio = target_w / target_h
    src_ratio = iw / ih
    if src_ratio > target_ratio:
        crop_h = ih / zoom
        crop_w = crop_h * target_ratio
    else:
        crop_w = iw / zoom
        crop_h = crop_w / target_ratio
    cx = iw / 2.0
    cy = crop_h / 2.0 + (ih - crop_h) * focus_y
    x0 = max(0, min(iw - crop_w, cx - crop_w / 2.0))
    y0 = max(0, min(ih - crop_h, cy - crop_h / 2.0))
    cropped = im.crop((x0, y0, x0 + crop_w, y0 + crop_h))
    return cropped.resize((target_w, target_h), Image.Resampling.BILINEAR)


def draw_wrapped(draw, text, font, fill, x, y, max_w, line_h, align="left"):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        test = (cur + " " + w).strip()
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] <= max_w or not cur:
            cur = test
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    cy = y
    for ln in lines:
        if align == "center":
            bbox = draw.textbbox((0, 0), ln, font=font)
            lw = bbox[2] - bbox[0]
            draw.text((x - lw // 2, cy), ln, font=font, fill=fill)
        else:
            draw.text((x, cy), ln, font=font, fill=fill)
        cy += line_h
    return cy


def make_frame(t: float, W: int, H: int, logo: Image.Image, photos: dict, fonts: dict) -> np.ndarray:
    vertical = H > W
    img = Image.new("RGB", (W, H), BORDO)
    draw = ImageDraw.Draw(img)

    # Helpers de fade de entrada/saída por cena
    def scene_alpha(local_t, dur):
        fin = ease_out(local_t / 0.7)
        fout = ease_out((dur - local_t) / 0.6)
        return min(fin, fout)

    if t < 5.0:
        # CENA 01 — APRESENTAÇÃO DA MARCA
        lt = t
        a = scene_alpha(lt, 5.0)
        pad = int(min(W, H) * 0.045)
        draw.rectangle([pad, pad, W - pad, H - pad], outline=blend_color(BORDO, DOURADO, 0.45 * a), width=2)
        lw = int(W * (0.76 if vertical else 0.50))
        lh = int(lw * logo.height / logo.width)
        logo_r = logo.resize((lw, lh), Image.Resampling.LANCZOS)
        if a < 0.99:
            bg_patch = Image.new("RGB", (lw, lh), BORDO)
            logo_r = Image.blend(bg_patch, logo_r, a)
        img.paste(logo_r, ((W - lw) // 2, (H - lh) // 2 - int(H * 0.03)))
        line_w = int(W * 0.16 * ease_out(lt / 1.4))
        cy = (H + lh) // 2 + int(H * 0.02)
        draw.rectangle([(W - line_w) // 2, cy, (W + line_w) // 2, cy + 2], fill=blend_color(BORDO, DOURADO, a))
        draw_wrapped(
            draw,
            "DIREITO PREVIDENCIÁRIO  •  OAB/BA 61.001",
            fonts["kicker"],
            blend_color(BORDO, DOURADO, a),
            W // 2,
            cy + int(H * 0.03),
            int(W * 0.8),
            int(H * 0.04),
            align="center",
        )

    elif t < 14.0:
        # CENA 02 — QUEM SOU (FOTOS/3.jpeg)
        lt = t - 5.0
        p = lt / 9.0
        a = scene_alpha(lt, 9.0)
        if vertical:
            ph = int(H * 0.54)
            pw = int(W * 0.84)
            photo = crop_ken_burns(photos["3"], pw, ph, p, focus_y=0.18)
            px, py = (W - pw) // 2, int(H * 0.08)
            draw.rectangle([px - 8, py - 8, px + pw + 8, py + ph + 8], outline=blend_color(BORDO, DOURADO, 0.6 * a), width=2)
            img.paste(photo, (px, py))
            ty = py + ph + int(H * 0.05)
            draw_wrapped(draw, "QUEM SOU", fonts["kicker"], blend_color(BORDO, DOURADO, a), W // 2, ty, pw, 36, "center")
            draw_wrapped(draw, "Paloma Vidal", fonts["h1"], blend_color(BORDO, MARFIM, a), W // 2, ty + 48, pw, 84, "center")
            draw_wrapped(draw, "Advogada Previdenciarista  •  OAB/BA 61.001", fonts["sub"], blend_color(BORDO, DOURADO, a), W // 2, ty + 150, pw, 48, "center")
            draw_wrapped(draw, "Pós-graduanda em Direito Previdenciário", fonts["body"], blend_color(BORDO, MARFIM, 0.88 * a), W // 2, ty + 225, pw, 42, "center")
        else:
            pw = int(W * 0.42)
            ph = int(H * 0.80)
            photo = crop_ken_burns(photos["3"], pw, ph, p, focus_y=0.18)
            px, py = int(W * 0.53), (H - ph) // 2
            draw.rectangle([px - 10, py - 10, px + pw + 10, py + ph + 10], outline=blend_color(BORDO, DOURADO, 0.6 * a), width=2)
            img.paste(photo, (px, py))
            tx = int(W * 0.07)
            mw = int(W * 0.41)
            draw.rectangle([tx, int(H * 0.22), tx + int(90 * ease_out(lt / 1.0)), int(H * 0.22) + 2], fill=DOURADO)
            draw_wrapped(draw, "QUEM SOU", fonts["kicker"], blend_color(BORDO, DOURADO, a), tx, int(H * 0.25), mw, 34)
            draw_wrapped(draw, "Paloma Vidal", fonts["h1"], blend_color(BORDO, MARFIM, a), tx, int(H * 0.31), mw, 86)
            draw_wrapped(draw, "Advogada Previdenciarista", fonts["h2"], blend_color(BORDO, DOURADO, a), tx, int(H * 0.46), mw, 54)
            draw_wrapped(draw, "OAB/BA 61.001", fonts["sub"], blend_color(BORDO, MARFIM, 0.9 * a), tx, int(H * 0.56), mw, 44)
            draw_wrapped(draw, "Pós-graduanda em Direito Previdenciário", fonts["body"], blend_color(BORDO, BEGE, a), tx, int(H * 0.65), mw, 40)

    elif t < 23.0:
        # CENA 03 — TRAJETÓRIA PROFISSIONAL (Marfim + FOTOS/1.jpeg)
        img.paste(MARFIM, [0, 0, W, H])
        lt = t - 14.0
        p = lt / 9.0
        a = scene_alpha(lt, 9.0)
        if vertical:
            ph = int(H * 0.50)
            pw = int(W * 0.84)
            photo = crop_ken_burns(photos["1"], pw, ph, p, focus_y=0.16)
            px, py = (W - pw) // 2, int(H * 0.08)
            draw.rectangle([px - 8, py - 8, px + pw + 8, py + ph + 8], outline=blend_color(MARFIM, BEGE, a), width=2)
            img.paste(photo, (px, py))
            ty = py + ph + int(H * 0.06)
            draw_wrapped(draw, "TRAJETÓRIA PROFISSIONAL", fonts["kicker"], blend_color(MARFIM, DOURADO_ESCURO, a), W // 2, ty, pw, 36, "center")
            draw_wrapped(draw, "Mais de 8 anos de experiência", fonts["h1"], blend_color(MARFIM, BORDO, a), W // 2, ty + 52, pw, 84, "center")
            draw_wrapped(draw, "Atuação dedicada à orientação e defesa dos direitos previdenciários e assistenciais dos segurados do INSS e de suas famílias.", fonts["body"], blend_color(MARFIM, GRAFITE, a), W // 2, ty + 235, pw, 44, "center")
        else:
            pw = int(W * 0.40)
            ph = int(H * 0.80)
            photo = crop_ken_burns(photos["1"], pw, ph, p, focus_y=0.16)
            px, py = int(W * 0.07), (H - ph) // 2
            draw.rectangle([px - 10, py - 10, px + pw + 10, py + ph + 10], outline=blend_color(MARFIM, BEGE, a), width=2)
            img.paste(photo, (px, py))
            tx = int(W * 0.53)
            mw = int(W * 0.40)
            draw.rectangle([tx, int(H * 0.22), tx + int(90 * ease_out(lt / 1.0)), int(H * 0.22) + 2], fill=DOURADO_ESCURO)
            draw_wrapped(draw, "TRAJETÓRIA PROFISSIONAL", fonts["kicker"], blend_color(MARFIM, DOURADO_ESCURO, a), tx, int(H * 0.25), mw, 34)
            draw_wrapped(draw, "Mais de 8 anos de experiência", fonts["h1"], blend_color(MARFIM, BORDO, a), tx, int(H * 0.31), mw, 82)
            draw_wrapped(draw, "Orientação e defesa dos direitos previdenciários e assistenciais dos segurados do INSS e de suas famílias.", fonts["body"], blend_color(MARFIM, GRAFITE, a), tx, int(H * 0.56), mw, 42)

    elif t < 38.0:
        # CENA 04 — ÁREAS DE ATUAÇÃO (Bordô + FOTOS/2.jpeg + revelação progressiva)
        lt = t - 23.0
        p = lt / 15.0
        a = scene_alpha(lt, 15.0)
        areas = [
            "BPC/LOAS",
            "Salário-maternidade",
            "Benefícios por incapacidade",
            "Aposentadoria urbana e rural",
            "Aposentadoria do professor",
            "Pensão por morte",
        ]
        if vertical:
            ph = int(H * 0.38)
            pw = int(W * 0.84)
            photo = crop_ken_burns(photos["2"], pw, ph, p, focus_y=0.18)
            px, py = (W - pw) // 2, int(H * 0.06)
            draw.rectangle([px - 8, py - 8, px + pw + 8, py + ph + 8], outline=blend_color(BORDO, DOURADO, 0.55 * a), width=2)
            img.paste(photo, (px, py))
            ty = py + ph + int(H * 0.04)
            draw_wrapped(draw, "ÁREAS DE ATUAÇÃO", fonts["kicker"], blend_color(BORDO, DOURADO, a), px, ty, pw, 34)
            draw_wrapped(draw, "Direito Previdenciário", fonts["h2"], blend_color(BORDO, MARFIM, a), px, ty + 42, pw, 58)
            ly = ty + 130
            for idx, item in enumerate(areas):
                ia = min(a, ease_out((lt - idx * 1.4) / 0.7))
                if ia > 0.02:
                    draw.rectangle([px, ly + 14, px + 14, ly + 16], fill=blend_color(BORDO, DOURADO, ia))
                    draw.text((px + 28, ly), item, font=fonts["sub"], fill=blend_color(BORDO, MARFIM, ia))
                ly += 74
        else:
            pw = int(W * 0.39)
            ph = int(H * 0.80)
            photo = crop_ken_burns(photos["2"], pw, ph, p, focus_y=0.18)
            px, py = int(W * 0.55), (H - ph) // 2
            draw.rectangle([px - 10, py - 10, px + pw + 10, py + ph + 10], outline=blend_color(BORDO, DOURADO, 0.55 * a), width=2)
            img.paste(photo, (px, py))
            tx = int(W * 0.07)
            mw = int(W * 0.43)
            draw_wrapped(draw, "ÁREAS DE ATUAÇÃO", fonts["kicker"], blend_color(BORDO, DOURADO, a), tx, int(H * 0.13), mw, 34)
            draw_wrapped(draw, "Direito Previdenciário", fonts["h1"], blend_color(BORDO, MARFIM, a), tx, int(H * 0.19), mw, 78)
            ly = int(H * 0.34)
            step = int(H * 0.09)
            for idx, item in enumerate(areas):
                ia = min(a, ease_out((lt - idx * 1.4) / 0.7))
                if ia > 0.02:
                    draw.rectangle([tx, ly + int(H * 0.018), tx + 18, ly + int(H * 0.018) + 2], fill=blend_color(BORDO, DOURADO, ia))
                    draw.text((tx + 32, ly), item, font=fonts["sub"], fill=blend_color(BORDO, MARFIM, ia))
                ly += step

    elif t < 48.0:
        # CENA 05 — PRINCÍPIOS PROFISSIONAIS (Marfim + FOTOS/3.jpeg)
        img.paste(MARFIM, [0, 0, W, H])
        lt = t - 38.0
        p = lt / 10.0
        a = scene_alpha(lt, 10.0)
        pillars = ["Ética", "Acolhimento", "Orientação individualizada"]
        if vertical:
            ph = int(H * 0.44)
            pw = int(W * 0.84)
            photo = crop_ken_burns(photos["3"], pw, ph, p, focus_y=0.20)
            px, py = (W - pw) // 2, int(H * 0.07)
            draw.rectangle([px - 8, py - 8, px + pw + 8, py + ph + 8], outline=blend_color(MARFIM, BEGE, a), width=2)
            img.paste(photo, (px, py))
            ty = py + ph + int(H * 0.05)
            draw_wrapped(draw, "PRINCÍPIOS PROFISSIONAIS", fonts["kicker"], blend_color(MARFIM, DOURADO_ESCURO, a), W // 2, ty, pw, 36, "center")
            ly = ty + 70
            for idx, pil in enumerate(pillars):
                ia = min(a, ease_out((lt - idx * 1.3) / 0.8))
                if ia > 0.02:
                    draw_wrapped(draw, pil, fonts["h2"], blend_color(MARFIM, BORDO, ia), W // 2, ly, pw, 62, "center")
                ly += 105
        else:
            pw = int(W * 0.40)
            ph = int(H * 0.80)
            photo = crop_ken_burns(photos["3"], pw, ph, p, focus_y=0.20)
            px, py = int(W * 0.07), (H - ph) // 2
            draw.rectangle([px - 10, py - 10, px + pw + 10, py + ph + 10], outline=blend_color(MARFIM, BEGE, a), width=2)
            img.paste(photo, (px, py))
            tx = int(W * 0.53)
            mw = int(W * 0.40)
            draw_wrapped(draw, "PRINCÍPIOS PROFISSIONAIS", fonts["kicker"], blend_color(MARFIM, DOURADO_ESCURO, a), tx, int(H * 0.18), mw, 34)
            ly = int(H * 0.28)
            for idx, pil in enumerate(pillars):
                ia = min(a, ease_out((lt - idx * 1.4) / 0.8))
                if ia > 0.02:
                    draw.rectangle([tx, ly - 8, tx + 46, ly - 6], fill=blend_color(MARFIM, DOURADO_ESCURO, ia))
                    draw_wrapped(draw, pil, fonts["h2"], blend_color(MARFIM, BORDO, ia), tx, ly + 4, mw, 58)
                ly += int(H * 0.17)

    elif t < 55.0:
        # CENA 06 — ATENDIMENTO (Bordô escuro + FOTOS/4.jpeg)
        img.paste(BORDO_ESCURO, [0, 0, W, H])
        lt = t - 48.0
        p = lt / 7.0
        a = scene_alpha(lt, 7.0)
        if vertical:
            ph = int(H * 0.48)
            pw = int(W * 0.84)
            photo = crop_ken_burns(photos["4"], pw, ph, p, focus_y=0.22)
            px, py = (W - pw) // 2, int(H * 0.08)
            draw.rectangle([px - 8, py - 8, px + pw + 8, py + ph + 8], outline=blend_color(BORDO_ESCURO, DOURADO, 0.6 * a), width=2)
            img.paste(photo, (px, py))
            ty = py + ph + int(H * 0.06)
            draw_wrapped(draw, "ABRANGÊNCIA NACIONAL", fonts["kicker"], blend_color(BORDO_ESCURO, DOURADO, a), W // 2, ty, pw, 36, "center")
            draw_wrapped(draw, "Atendimento on-line em todo o Brasil", fonts["h1"], blend_color(BORDO_ESCURO, MARFIM, a), W // 2, ty + 52, pw, 84, "center")
            draw_wrapped(draw, "Mediante agendamento • Segunda a sexta, em horário comercial", fonts["body"], blend_color(BORDO_ESCURO, BEGE, a), W // 2, ty + 250, pw, 44, "center")
        else:
            pw = int(W * 0.38)
            ph = int(H * 0.80)
            photo = crop_ken_burns(photos["4"], pw, ph, p, focus_y=0.22)
            px, py = int(W * 0.56), (H - ph) // 2
            draw.rectangle([px - 10, py - 10, px + pw + 10, py + ph + 10], outline=blend_color(BORDO_ESCURO, DOURADO, 0.6 * a), width=2)
            img.paste(photo, (px, py))
            tx = int(W * 0.07)
            mw = int(W * 0.43)
            draw.rectangle([tx, int(H * 0.24), tx + int(90 * ease_out(lt / 0.9)), int(H * 0.24) + 2], fill=DOURADO)
            draw_wrapped(draw, "ABRANGÊNCIA NACIONAL", fonts["kicker"], blend_color(BORDO_ESCURO, DOURADO, a), tx, int(H * 0.27), mw, 34)
            draw_wrapped(draw, "Atendimento on-line em todo o Brasil", fonts["h1"], blend_color(BORDO_ESCURO, MARFIM, a), tx, int(H * 0.34), mw, 82)
            draw_wrapped(draw, "Videoconferência e WhatsApp profissional, mediante agendamento, de segunda a sexta-feira.", fonts["body"], blend_color(BORDO_ESCURO, BEGE, a), tx, int(H * 0.62), mw, 42)

    else:
        # CENA 07 — ENCERRAMENTO
        lt = t - 55.0
        a = ease_out(lt / 0.8)
        pad = int(min(W, H) * 0.045)
        draw.rectangle([pad, pad, W - pad, H - pad], outline=blend_color(BORDO, DOURADO, 0.45 * a), width=2)
        lw = int(W * (0.72 if vertical else 0.44))
        lh = int(lw * logo.height / logo.width)
        logo_r = logo.resize((lw, lh), Image.Resampling.LANCZOS)
        if a < 0.99:
            logo_r = Image.blend(Image.new("RGB", (lw, lh), BORDO), logo_r, a)
        img.paste(logo_r, ((W - lw) // 2, int(H * 0.24)))
        cy = int(H * 0.24) + lh + int(H * 0.06)
        draw_wrapped(
            draw,
            "Conhecer seus direitos é o primeiro passo para protegê-los.",
            fonts["quote"],
            blend_color(BORDO, MARFIM, a),
            W // 2,
            cy,
            int(W * 0.78),
            int(H * 0.055),
            "center",
        )
        draw_wrapped(
            draw,
            "OAB/BA 61.001  •  @palomavidal.adv  •  (75) 99234-7812",
            fonts["kicker"],
            blend_color(BORDO, DOURADO, a),
            W // 2,
            int(H * 0.74),
            int(W * 0.82),
            36,
            "center",
        )

    return np.asarray(img, dtype=np.uint8)


def build_fonts(W: int, H: int):
    scale = min(W, H) / 1080.0
    return {
        "kicker": find_font(SANS_BOLD_PATHS, max(16, int(24 * scale))),
        "h1": find_font(SERIF_BOLD_PATHS, max(36, int(72 * scale))),
        "h2": find_font(SERIF_BOLD_PATHS, max(28, int(52 * scale))),
        "sub": find_font(SANS_PATHS, max(22, int(34 * scale))),
        "body": find_font(SANS_PATHS, max(20, int(30 * scale))),
        "quote": find_font(SERIF_ITALIC_PATHS, max(26, int(44 * scale))),
    }


def render_variant(W: int, H: int, out_mp4: str, audio_wav: str, crf: str, logo, photos, save_poster: str = None):
    os.makedirs(os.path.dirname(out_mp4), exist_ok=True)
    fonts = build_fonts(W, H)
    cmd = [
        "ffmpeg",
        "-y",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", f"{W}x{H}",
        "-pix_fmt", "rgb24",
        "-r", str(FPS),
        "-i", "-",
        "-i", audio_wav,
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", crf,
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "128k",
        "-movflags", "+faststart",
        "-shortest",
        out_mp4,
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stderr=subprocess.DEVNULL)
    for fidx in range(TOTAL_FRAMES):
        t = fidx / FPS
        frame = make_frame(t, W, H, logo, photos, fonts)
        if save_poster and fidx == int(7.5 * FPS):
            Image.fromarray(frame).save(save_poster, "WEBP", quality=88, method=6)
        proc.stdin.write(frame.tobytes())
    proc.stdin.close()
    ret = proc.wait()
    if ret != 0:
        raise RuntimeError(f"FFmpeg falhou ao gerar {out_mp4} (código {ret})")
    size_mb = os.path.getsize(out_mp4) / (1024 * 1024)
    print(f"Renderizado: {out_mp4} ({W}x{H}, {size_mb:.2f} MB)")


def main():
    os.makedirs("public/videos", exist_ok=True)
    os.makedirs("private-deliverables/video", exist_ok=True)
    audio_wav = os.path.join("private-deliverables", "video", "_ambient_track.wav")
    print("Sintetizando trilha instrumental ambiente original (60s)...")
    generate_ambient_audio(audio_wav, DURATION)

    logo, photos = load_assets()

    # 1. Versão Web otimizada (1280x720) + Poster WebP
    render_variant(
        1280,
        720,
        "public/videos/paloma-vidal-video-institucional-web.mp4",
        audio_wav,
        crf="25",
        logo=logo,
        photos=photos,
        save_poster="public/videos/paloma-vidal-video-institucional-poster.webp",
    )

    # 2. Versão Full HD (1920x1080) — entrega privada à cliente
    render_variant(
        1920,
        1080,
        "private-deliverables/video/paloma-vidal-video-institucional-fullhd.mp4",
        audio_wav,
        crf="20",
        logo=logo,
        photos=photos,
    )

    # 3. Versão Vertical Reels (1080x1920) — entrega privada à cliente
    render_variant(
        1080,
        1920,
        "private-deliverables/video/paloma-vidal-video-institucional-reels.mp4",
        audio_wav,
        crf="21",
        logo=logo,
        photos=photos,
    )

    if os.path.exists(audio_wav):
        os.remove(audio_wav)
    print("Todas as versões do vídeo institucional foram renderizadas com sucesso!")


if __name__ == "__main__":
    main()
