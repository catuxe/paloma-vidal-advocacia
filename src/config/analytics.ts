export const ANALYTICS_CONFIG = {
  gtmId: import.meta.env.PUBLIC_GTM_ID?.trim() || '',
  ga4Id: import.meta.env.PUBLIC_GA4_MEASUREMENT_ID?.trim() || '',
  googleAdsId: import.meta.env.PUBLIC_GOOGLE_ADS_ID?.trim() || '',
  googleAdsConversionLabel: import.meta.env.PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim() || '',
};

/**
 * Rotas com temas sensíveis de saúde, deficiência ou crianças.
 * Conforme diretrizes de privacidade, LGPD e políticas do Google Ads,
 * tags publicitárias permanecem desabilitadas nessas páginas até avaliação específica de conformidade.
 */
export const SENSITIVE_PATH_PREFIXES = [
  '/direito-previdenciario/bpc-loas',
  '/direito-previdenciario/auxilio-incapacidade-temporaria',
  '/direito-previdenciario/aposentadoria-incapacidade-permanente',
  '/blog/bpc-loas-crianca-autismo',
  '/blog/motivos-negativa-bpc-loas',
  '/blog/depressao-direito-bpc-loas',
  '/blog/cancer-direito-bpc-loas',
  '/blog/salario-maternidade-maes-menores-de-idade',
];

export function isSensitivePath(pathname: string): boolean {
  return SENSITIVE_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}
