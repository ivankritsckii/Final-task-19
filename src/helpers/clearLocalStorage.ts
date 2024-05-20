export function clearLocalStorage(): void {
  // localStorage.clear();
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}
