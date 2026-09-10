function detectBrowser() {
  if (typeof navigator === 'undefined') return 'shell';
  const ua = navigator.userAgent;
  if (/edg\//i.test(ua)) return 'edge';
  if (/opr\/|opera/i.test(ua)) return 'opera';
  if (/chrome|crios/i.test(ua)) return 'chrome';
  if (/firefox|fxios/i.test(ua)) return 'firefox';
  if (/safari/i.test(ua)) return 'safari';
  return 'shell';
}

export const browserName = detectBrowser();
