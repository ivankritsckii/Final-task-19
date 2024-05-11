import { checkAdressForm } from "./checkAdressForm";

export function checkRegisstrationForm(
  emailInput: HTMLInputElement,
  nameInput: HTMLInputElement,
  surnameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
): boolean {
  let result = true;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const labelList = document.querySelectorAll(".label-registration");

  if (emailPattern.test(emailInput.value)) {
    labelList[0].classList.remove("label-registration_active");
  } else {
    labelList[0].classList.add("label-registration_active");
    result = false;
  }
  if (namePattern.test(nameInput.value)) {
    labelList[1].classList.remove("label-registration_active");
  } else {
    labelList[1].classList.add("label-registration_active");
    result = false;
  }
  if (namePattern.test(surnameInput.value)) {
    labelList[2].classList.remove("label-registration_active");
  } else {
    labelList[2].classList.add("label-registration_active");
    result = false;
  }
  if (passwordPattern.test(passwordInput.value)) {
    labelList[3].classList.remove("label-registration_active");
  } else {
    labelList[3].classList.add("label-registration_active");
    result = false;
  }

  if (result === true) {
    return checkAdressForm();
  } else {
    checkAdressForm();
    return false;
  }
}
