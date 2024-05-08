export function checkRegisstrationForm(
  emailInput: HTMLInputElement,
  nameInput: HTMLInputElement,
  surnameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
  const passwordPattern = /[0-9a-fA-F]{6,}/;
  const emailLabel = document.querySelector(".emailLabel") as HTMLLabelElement;
  const nameLabel = document.querySelector(".nameLabel") as HTMLLabelElement;
  const surnameLabel = document.querySelector(
    ".surnameLabel",
  ) as HTMLLabelElement;
  const passwordLabel = document.querySelector(
    ".passwordLabel",
  ) as HTMLLabelElement;
  if (emailPattern.test(emailInput.value)) {
    console.log("Email валидный");
  } else {
    console.log("Email невалидный");
    emailLabel.classList.add("label-registration_active");
  }
  if (namePattern.test(nameInput.value)) {
    console.log("name валидный");
  } else {
    console.log("name невалидный");
    nameLabel.classList.add("label-registration_active");
  }
  if (namePattern.test(surnameInput.value)) {
    console.log("surname валидный");
  } else {
    console.log("surname невалидный");
    surnameLabel.classList.add("label-registration_active");
  }
  if (passwordPattern.test(passwordInput.value)) {
    console.log("password валидный");
    return true;
  } else {
    console.log("password невалидный");
    passwordLabel.classList.add("label-registration_active");
  }
  return false;
}
