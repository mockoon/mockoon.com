const allowedRedirectHosts = new Set([
  'localhost',
  '127.0.0.1',
  '[::1]',
  'app.mockoon.com'
]);

export const normalizeAppRedirectUrl = (
  value: string | null | undefined
): string | null => {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    const isAllowedProtocol =
      url.protocol === 'http:' || url.protocol === 'https:';
    const isAllowedHost =
      allowedRedirectHosts.has(url.hostname.toLowerCase()) ||
      url.hostname.toLowerCase().endsWith('.localhost');

    if (!isAllowedProtocol || !isAllowedHost) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
};
