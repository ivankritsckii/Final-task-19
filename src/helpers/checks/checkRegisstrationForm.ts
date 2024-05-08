export function checkRegisstrationForm(
  emailInput: HTMLInputElement,
  nameInput: HTMLInputElement,
  surnameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
  const passwordPattern = /[0-9a-fA-F]{6,8}/;
  if (emailPattern.test(emailInput.value)) {
    console.log("Email валидный");
  } else {
    console.log("Email невалидный");
  }
  if (namePattern.test(nameInput.value)) {
    console.log("name валидный");
  } else {
    console.log("name невалидный");
  }
  if (namePattern.test(surnameInput.value)) {
    console.log("surname валидный");
  } else {
    console.log("surname невалидный");
  }
  if (passwordPattern.test(passwordInput.value)) {
    console.log("password валидный");
    return true;
  } else {
    console.log("password невалидный");
  }
  return false;
}
