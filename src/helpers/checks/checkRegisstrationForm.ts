export function checkRegisstrationForm(
  emailInput: HTMLInputElement,
  nameInput: HTMLInputElement,
  surnameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
): boolean {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const emailLabel = document.querySelector(".emailLabel") as HTMLLabelElement;
  const nameLabel = document.querySelector(".nameLabel") as HTMLLabelElement;
  const surnameLabel = document.querySelector(
    ".surnameLabel",
  ) as HTMLLabelElement;
  const passwordLabel = document.querySelector(
    ".passwordLabel",
  ) as HTMLLabelElement;

  if (emailPattern.test(emailInput.value)) {
    emailLabel.classList.remove("label-registration_active");
  } else {
    emailLabel.classList.add("label-registration_active");
  }
  if (namePattern.test(nameInput.value)) {
    nameLabel.classList.remove("label-registration_active");
  } else {
    nameLabel.classList.add("label-registration_active");
  }
  if (namePattern.test(surnameInput.value)) {
    surnameLabel.classList.remove("label-registration_active");
  } else {
    surnameLabel.classList.add("label-registration_active");
  }
  if (passwordPattern.test(passwordInput.value)) {
    passwordLabel.classList.remove("label-registration_active");
    return true;
  } else {
    passwordLabel.classList.add("label-registration_active");
  }
  return false;
}
