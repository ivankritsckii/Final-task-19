export function watchPressing(
  inputIN: HTMLInputElement,
  inputOut: HTMLInputElement,
): void {
  const active = document.getElementById("one-address") as HTMLInputElement;
  if (active.checked) {
    inputOut.value = inputIN.value;
  }
}
