#!/usr/bin/env python3
"""
Script reutilizável para exportação dos artigos jurídicos em PDF editorial A4.
Lê os arquivos Markdown do diretório informado (padrão: private-deliverables/backup-artigos-originais)
e gera o documento institucional com capa, apresentação, sumário paginado, tabelas,
links clicáveis e referências oficiais.
"""
import os
import re
import sys
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm, mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)
from reportlab.platypus.tableofcontents import TableOfContents

# Tokens oficiais da identidade visual
BORDO = colors.HexColor("#44121E")
BORDO_ESCURO = colors.HexColor("#350F1A")
DOURADO = colors.HexColor("#E8D694")
DOURADO_ESCURO = colors.HexColor("#7D6428")
MARFIM = colors.HexColor("#FAF7F2")
BEGE = colors.HexColor("#D9C8B8")
BEGE_CLARO = colors.HexColor("#EFE7DC")
GRAFITE = colors.HexColor("#292326")
GRAFITE_SUAVE = colors.HexColor("#564D51")

VIDEO_MAP = {
    "direito-salario-maternidade": (
        "Quem tem direito ao salário-maternidade?",
        "https://www.instagram.com/reel/DYm8NLFOTwr/",
    ),
    "depressao-bpc-loas": (
        "Quem tem depressão pode ter direito ao BPC/LOAS?",
        "https://www.instagram.com/reel/DbvgzzIu5l8/",
    ),
    "cancer-bpc-loas": (
        "Tratamento contra o câncer e possibilidade de BPC/LOAS",
        "https://www.instagram.com/reel/DbJG58xu_bZ/",
    ),
}

ARTICLE_ORDER = [
    "bpc-loas-crianca-autismo.md",
    "motivos-negativa-bpc-loas.md",
    "salario-maternidade-maes-menores-de-idade.md",
    "quem-tem-direito-salario-maternidade.md",
    "manicure-gravida-salario-maternidade.md",
    "regras-aposentadoria-inss-2027.md",
    "trabalho-rural-antes-12-anos-aposentadoria.md",
    "como-comprovar-trabalho-rural-aposentadoria.md",
    "depressao-direito-bpc-loas.md",
    "cancer-direito-bpc-loas.md",
]


def parse_frontmatter(raw: str):
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", raw, re.S)
    if not match:
        return {}, raw
    fm_text, body = match.group(1), match.group(2)
    meta = {
        "references": [],
        "relatedVideos": [],
        "tags": [],
    }
    lines = fm_text.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.startswith("references:"):
            i += 1
            cur = {}
            while i < len(lines) and (lines[i].startswith("  ") or lines[i].strip() == ""):
                s = lines[i].strip()
                if s.startswith("- label:"):
                    if cur:
                        meta["references"].append(cur)
                    cur = {"label": s.split(":", 1)[1].strip().strip('"')}
                elif s.startswith("url:"):
                    cur["url"] = s.split(":", 1)[1].strip().strip('"')
                i += 1
            if cur:
                meta["references"].append(cur)
            continue
        elif line.startswith("relatedVideos:"):
            val = line.split(":", 1)[1].strip()
            if val == "[]":
                i += 1
                continue
            i += 1
            while i < len(lines) and lines[i].startswith("  -"):
                meta["relatedVideos"].append(lines[i].split("-", 1)[1].strip().strip('"'))
                i += 1
            continue
        elif ":" in line and not line.startswith(" "):
            k, v = line.split(":", 1)
            meta[k.strip()] = v.strip().strip('"')
        i += 1
    return meta, body.strip()


def md_inline_to_rml(text: str) -> str:
    text = escape(text)
    # Bold **...**
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    # Italic *...*
    text = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"<i>\1</i>", text)
    # Links [label](url)
    text = re.sub(
        r"\[([^\]]+)\]\((https?://[^\)]+)\)",
        r'<a href="\2" color="#44121E"><u>\1</u></a>',
        text,
    )
    return text


class EditorialDocTemplate(BaseDocTemplate):
    def __init__(self, filename, **kw):
        super().__init__(filename, **kw)
        w, h = A4
        cover_frame = Frame(2.0 * cm, 2.0 * cm, w - 4.0 * cm, h - 4.0 * cm, id="cover")
        body_frame = Frame(2.2 * cm, 2.2 * cm, w - 4.4 * cm, h - 4.6 * cm, id="body")
        self.addPageTemplates(
            [
                PageTemplate(id="Cover", frames=[cover_frame], onPage=self._draw_cover),
                PageTemplate(id="Body", frames=[body_frame], onPage=self._draw_body),
            ]
        )

    def afterFlowable(self, flowable):
        if isinstance(flowable, Paragraph):
            style_name = flowable.style.name
            if style_name == "ArticleTitle":
                key = getattr(flowable, "_bookmark_key", None)
                text = flowable.getPlainText()
                if key:
                    self.canv.bookmarkPage(key)
                    self.notify("TOCEntry", (0, text, self.page, key))
                else:
                    self.notify("TOCEntry", (0, text, self.page))

    def _draw_cover(self, canvas, doc):
        w, h = A4
        canvas.saveState()
        canvas.setFillColor(BORDO)
        canvas.rect(0, 0, w, h, fill=1, stroke=0)
        # Moldura dupla dourada editorial
        canvas.setStrokeColor(DOURADO)
        canvas.setLineWidth(1.0)
        canvas.rect(1.3 * cm, 1.3 * cm, w - 2.6 * cm, h - 2.6 * cm, fill=0, stroke=1)
        canvas.setLineWidth(0.4)
        canvas.rect(1.55 * cm, 1.55 * cm, w - 3.1 * cm, h - 3.1 * cm, fill=0, stroke=1)
        canvas.restoreState()

    def _draw_body(self, canvas, doc):
        w, h = A4
        canvas.saveState()
        # Fundo sutil marfim
        canvas.setFillColor(MARFIM)
        canvas.rect(0, 0, w, h, fill=1, stroke=0)
        # Cabeçalho institucional
        canvas.setStrokeColor(BEGE)
        canvas.setLineWidth(0.7)
        canvas.line(2.2 * cm, h - 1.75 * cm, w - 2.2 * cm, h - 1.75 * cm)
        canvas.setFont("Times-Roman", 8.5)
        canvas.setFillColor(BORDO)
        canvas.drawString(2.2 * cm, h - 1.55 * cm, "PALOMA VIDAL — ADVOCACIA & CONSULTORIA")
        canvas.setFillColor(DOURADO_ESCURO)
        canvas.drawRightString(w - 2.2 * cm, h - 1.55 * cm, "DIREITO PREVIDENCIÁRIO  |  OAB/BA 61.001")
        # Rodapé institucional + numeração
        canvas.setStrokeColor(BEGE)
        canvas.line(2.2 * cm, 1.75 * cm, w - 2.2 * cm, 1.75 * cm)
        canvas.setFont("Helvetica", 8)
        canvas.setFillColor(GRAFITE_SUAVE)
        canvas.drawString(
            2.2 * cm,
            1.32 * cm,
            "Acervo interno — Versões integrais originais (25/11/2026) — Dulce Paloma Vidal dos Santos Lima (OAB/BA 61.001)",
        )
        canvas.setFont("Helvetica-Bold", 8.5)
        canvas.setFillColor(BORDO)
        canvas.drawRightString(w - 2.2 * cm, 1.32 * cm, f"Página {doc.page}")
        canvas.restoreState()


def build_styles():
    base = getSampleStyleSheet()
    return {
        "CoverKicker": ParagraphStyle(
            "CoverKicker",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=14,
            alignment=TA_CENTER,
            textColor=DOURADO,
            spaceAfter=12,
        ),
        "CoverTitle": ParagraphStyle(
            "CoverTitle",
            parent=base["Title"],
            fontName="Times-Bold",
            fontSize=28,
            leading=34,
            alignment=TA_CENTER,
            textColor=MARFIM,
            spaceAfter=14,
        ),
        "CoverSubtitle": ParagraphStyle(
            "CoverSubtitle",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=14,
            leading=20,
            alignment=TA_CENTER,
            textColor=DOURADO,
            spaceAfter=20,
        ),
        "CoverMeta": ParagraphStyle(
            "CoverMeta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=16,
            alignment=TA_CENTER,
            textColor=MARFIM,
        ),
        "SectionHeading": ParagraphStyle(
            "SectionHeading",
            parent=base["Heading1"],
            fontName="Times-Bold",
            fontSize=20,
            leading=25,
            textColor=BORDO,
            spaceBefore=6,
            spaceAfter=12,
        ),
        "ArticleKicker": ParagraphStyle(
            "ArticleKicker",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.5,
            leading=12,
            textColor=DOURADO_ESCURO,
            spaceAfter=4,
        ),
        "ArticleTitle": ParagraphStyle(
            "ArticleTitle",
            parent=base["Heading1"],
            fontName="Times-Bold",
            fontSize=18.5,
            leading=23,
            textColor=BORDO,
            spaceAfter=6,
        ),
        "ArticleSubtitle": ParagraphStyle(
            "ArticleSubtitle",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=11.5,
            leading=16,
            textColor=GRAFITE_SUAVE,
            spaceAfter=8,
        ),
        "ArticleMeta": ParagraphStyle(
            "ArticleMeta",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=12,
            textColor=GRAFITE_SUAVE,
            spaceAfter=12,
        ),
        "H2": ParagraphStyle(
            "H2",
            parent=base["Heading2"],
            fontName="Times-Bold",
            fontSize=13.5,
            leading=18,
            textColor=BORDO,
            spaceBefore=12,
            spaceAfter=5,
        ),
        "H3": ParagraphStyle(
            "H3",
            parent=base["Heading3"],
            fontName="Times-Bold",
            fontSize=11.5,
            leading=15.5,
            textColor=BORDO_ESCURO,
            spaceBefore=9,
            spaceAfter=4,
        ),
        "Body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=15,
            alignment=TA_JUSTIFY,
            textColor=GRAFITE,
            spaceAfter=7,
        ),
        "Bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.8,
            leading=14.5,
            leftIndent=16,
            firstLineIndent=-10,
            textColor=GRAFITE,
            spaceAfter=4,
        ),
        "Quote": ParagraphStyle(
            "Quote",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=9.6,
            leading=14.5,
            leftIndent=14,
            rightIndent=10,
            backColor=BEGE_CLARO,
            borderPadding=8,
            textColor=GRAFITE,
            spaceBefore=6,
            spaceAfter=8,
        ),
        "BoxNotice": ParagraphStyle(
            "BoxNotice",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=14.5,
            backColor=BEGE_CLARO,
            borderColor=BORDO,
            borderWidth=0.8,
            borderPadding=10,
            textColor=GRAFITE,
            spaceBefore=8,
            spaceAfter=12,
        ),
        "RefItem": ParagraphStyle(
            "RefItem",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=9,
            leading=13.5,
            leftIndent=10,
            textColor=GRAFITE,
            spaceAfter=3,
        ),
        "TOC0": ParagraphStyle(
            "TOC0",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=10,
            leading=16,
            leftIndent=0,
            firstLineIndent=0,
            textColor=GRAFITE,
            spaceAfter=4,
        ),
    }


def render_markdown_blocks(body: str, styles: dict):
    flow = []
    lines = body.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i].rstrip()
        stripped = line.strip()
        if not stripped:
            i += 1
            continue

        # Markdown table
        if stripped.startswith("|") and i + 1 < len(lines) and lines[i + 1].strip().startswith("|"):
            table_lines = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                table_lines.append(lines[i].strip())
                i += 1
            rows = []
            for idx, tl in enumerate(table_lines):
                if idx == 1 and set(tl.replace("|", "").replace("-", "").replace(":", "").strip()) == set():
                    continue
                cells = [c.strip() for c in tl.strip("|").split("|")]
                style_cell = ParagraphStyle(
                    "TCell",
                    parent=styles["Body"],
                    fontSize=8.5,
                    leading=11.5,
                    alignment=TA_LEFT,
                    textColor=MARFIM if idx == 0 else GRAFITE,
                    spaceAfter=0,
                )
                rows.append([Paragraph(md_inline_to_rml(c), style_cell) for c in cells])
            if rows:
                ncols = len(rows[0])
                col_w = (A4[0] - 4.4 * cm) / ncols
                t = Table(rows, colWidths=[col_w] * ncols, repeatRows=1)
                t.setStyle(
                    TableStyle(
                        [
                            ("BACKGROUND", (0, 0), (-1, 0), BORDO),
                            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, BEGE_CLARO]),
                            ("GRID", (0, 0), (-1, -1), 0.4, BEGE),
                            ("VALIGN", (0, 0), (-1, -1), "TOP"),
                            ("TOPPADDING", (0, 0), (-1, -1), 5),
                            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                            ("LEFTPADDING", (0, 0), (-1, -1), 5),
                            ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                        ]
                    )
                )
                flow.append(Spacer(1, 4))
                flow.append(t)
                flow.append(Spacer(1, 8))
            continue

        if stripped.startswith("### "):
            flow.append(Paragraph(md_inline_to_rml(stripped[4:]), styles["H3"]))
        elif stripped.startswith("## "):
            flow.append(Paragraph(md_inline_to_rml(stripped[3:]), styles["H2"]))
        elif stripped.startswith("> "):
            quote_parts = []
            while i < len(lines) and lines[i].strip().startswith("> "):
                quote_parts.append(lines[i].strip()[2:])
                i += 1
            flow.append(Paragraph(md_inline_to_rml(" ".join(quote_parts)), styles["Quote"]))
            continue
        elif stripped.startswith("- "):
            flow.append(Paragraph("•  " + md_inline_to_rml(stripped[2:]), styles["Bullet"]))
        elif re.match(r"^\d+\.\s+", stripped):
            flow.append(Paragraph(md_inline_to_rml(stripped), styles["Bullet"]))
        else:
            para_lines = [stripped]
            while (
                i + 1 < len(lines)
                and lines[i + 1].strip()
                and not lines[i + 1].strip().startswith(("#", "-", ">", "|"))
                and not re.match(r"^\d+\.\s+", lines[i + 1].strip())
            ):
                i += 1
                para_lines.append(lines[i].strip())
            flow.append(Paragraph(md_inline_to_rml(" ".join(para_lines)), styles["Body"]))
        i += 1
    return flow


def generate_pdf(source_dir: str, output_pdf: str):
    styles = build_styles()
    os.makedirs(os.path.dirname(output_pdf), exist_ok=True)
    doc = EditorialDocTemplate(
        output_pdf,
        pagesize=A4,
        title="Direito Previdenciário — Coletânea de Artigos | Paloma Vidal",
        author="Paloma Vidal — Advocacia & Consultoria",
    )

    story = []

    # 1. CAPA INSTITUCIONAL
    story.append(Spacer(1, 2.6 * cm))
    logo_path = os.path.join("public", "images", "logo", "logo-horizontal.png")
    if os.path.exists(logo_path):
        img = Image(logo_path, width=10.5 * cm, height=2.55 * cm)
        img.hAlign = "CENTER"
        story.append(img)
        story.append(Spacer(1, 2.0 * cm))

    story.append(Paragraph("PALOMA VIDAL — ADVOCACIA &amp; CONSULTORIA", styles["CoverKicker"]))
    story.append(Paragraph("Direito Previdenciário —<br/>Coletânea de Artigos", styles["CoverTitle"]))
    story.append(
        Paragraph("Acervo de conteúdos jurídicos para consulta profissional.", styles["CoverSubtitle"])
    )
    story.append(Spacer(1, 4.2 * cm))
    story.append(
        Paragraph(
            "<b>Dulce Paloma Vidal dos Santos Lima</b><br/>"
            "Advogada Previdenciarista<br/>"
            "OAB/BA 61.001<br/><br/>"
            "Atendimento on-line em todo o Brasil  •  palomavidaladvocacia.com.br",
            styles["CoverMeta"],
        )
    )
    story.append(NextPageTemplate("Body"))
    story.append(PageBreak())

    # 2. PÁGINA DE APRESENTAÇÃO
    story.append(Paragraph("Apresentação do Acervo", styles["SectionHeading"]))
    story.append(
        Paragraph(
            "<b>Observação obrigatória:</b> Documento de uso profissional interno. Esta coletânea preserva as "
            "versões originais dos artigos existentes no site em 25 de novembro de 2026, antes da revisão editorial. "
            "Determinadas informações jurídicas poderão estar desatualizadas e deverão ser verificadas antes de sua "
            "utilização profissional.",
            styles["BoxNotice"],
        )
    )
    story.append(
        Paragraph(
            "Este volume reúne integralmente as versões completas dos artigos originalmente preparados para o blog "
            "de <b>Paloma Vidal — Advocacia &amp; Consultoria</b> (Dulce Paloma Vidal dos Santos Lima — OAB/BA 61.001), "
            "preservando títulos, subtítulos, fundamentações, exemplos hipotéticos, perguntas frequentes, tabelas, "
            "vídeos relacionados e links oficiais antes da reestruturação editorial voltada ao público geral.",
            styles["Body"],
        )
    )
    story.append(
        Paragraph(
            "<b>Nota de autoria e revisão:</b> Os textos reproduzidos neste documento correspondem às minutas "
            "editoriais originais arquivadas em 25 de novembro de 2026 e não devem ser atribuídos como "
            "definitivamente revisados pela advogada sem sua conferência expressa, especialmente quanto às "
            "atualizações recentes relacionadas ao cômputo do Bolsa Família no cálculo da renda familiar do BPC/LOAS "
            "(Lei nº 15.077/2024 e Decreto nº 12.534/2025).",
            styles["Body"],
        )
    )
    story.append(Spacer(1, 0.4 * cm))

    # 3. SUMÁRIO COM NUMERAÇÃO REAL DE PÁGINAS
    story.append(Paragraph("Sumário", styles["SectionHeading"]))
    toc = TableOfContents()
    toc.levelStyles = [styles["TOC0"]]
    toc.dotsMinLevel = 0
    story.append(toc)

    # 4. TODOS OS ARTIGOS COMPLETOS (cada um em nova página)
    files = [f for f in ARTICLE_ORDER if os.path.exists(os.path.join(source_dir, f))]
    extra = sorted(f for f in os.listdir(source_dir) if f.endswith(".md") and f not in files)
    files.extend(extra)

    for idx, fname in enumerate(files, 1):
        path = os.path.join(source_dir, fname)
        with open(path, "r", encoding="utf-8") as fh:
            meta, body = parse_frontmatter(fh.read())

        story.append(PageBreak())
        status_label = (
            "Publicado no site em 25/11/2026"
            if meta.get("editorialStatus") == "publicado"
            else "Minuta em rascunho em 25/11/2026"
        )
        cat = meta.get("category", "Direito Previdenciário")
        story.append(Paragraph(f"ARTIGO {idx:02d}  •  {escape(cat.upper())}", styles["ArticleKicker"]))

        title_p = Paragraph(f"{idx:02d}. {escape(meta.get('title', fname))}", styles["ArticleTitle"])
        title_p._bookmark_key = f"artigo-{idx:02d}"
        story.append(title_p)

        if meta.get("subtitle"):
            story.append(Paragraph(escape(meta["subtitle"]), styles["ArticleSubtitle"]))

        slug = meta.get("slug", fname.replace(".md", ""))
        pub_date = meta.get("publishedAt", "2026-11-24")
        story.append(
            Paragraph(
                f"URL: /blog/{escape(slug)}  |  Data original: {escape(pub_date)}  |  Situação no backup: {escape(status_label)}",
                styles["ArticleMeta"],
            )
        )

        story.extend(render_markdown_blocks(body, styles))

        # Vídeos relacionados (título + link)
        vids = meta.get("relatedVideos") or []
        if vids:
            story.append(Paragraph("Vídeos relacionados no Instagram", styles["H2"]))
            for vid in vids:
                if vid in VIDEO_MAP:
                    vtitle, vurl = VIDEO_MAP[vid]
                    story.append(
                        Paragraph(
                            f'•  <b>{escape(vtitle)}</b> — <a href="{vurl}" color="#44121E"><u>{vurl}</u></a>',
                            styles["RefItem"],
                        )
                    )

        # Referências originais clicáveis
        refs = meta.get("references") or []
        if refs:
            story.append(Paragraph("Referências oficiais originais", styles["H2"]))
            for ref in refs:
                lbl = escape(ref.get("label", ""))
                url = ref.get("url", "")
                if url:
                    story.append(
                        Paragraph(
                            f'•  {lbl}: <a href="{url}" color="#44121E"><u>{escape(url)}</u></a>',
                            styles["RefItem"],
                        )
                    )

    doc.multiBuild(story)
    print(f"PDF gerado com sucesso em: {output_pdf} ({len(files)} artigos)")


if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else os.path.join("private-deliverables", "backup-artigos-originais")
    out = (
        sys.argv[2]
        if len(sys.argv) > 2
        else os.path.join("private-deliverables", "Paloma_Vidal_Coletanea_Artigos_Juridicos_Versao_Integral.pdf")
    )
    generate_pdf(src, out)
