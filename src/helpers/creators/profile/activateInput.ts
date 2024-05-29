export function activateInput(input: HTMLElement): void {
  const inputs = input.parentNode?.querySelectorAll("input");
  console.log(inputs);
  inputs?.forEach((input) => {
    input.disabled ? (input.disabled = false) : (input.disabled = true);
  });
}
