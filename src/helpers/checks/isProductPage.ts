export function isProductPage(url?: string): boolean {
  const hash = window.location.hash;
  if (url?.includes("ritter-sport")) {
    return true;
  }
  if (hash.length != 0) {
    if (hash.includes("ritter-sport")) {
      return true;
    }
  }
  return false;
}
