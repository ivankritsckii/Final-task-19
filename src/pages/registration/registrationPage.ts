import { apiCreateCustomer } from "../../apiRequests/apiCreateCustomer";
import { createInput } from "../../helpers/creators/createInput";
import { checkRegisstrationForm } from "../../helpers/checks/checkRegisstrationForm";
const styles = require("./form.module.scss");

export function registrationPage(parent: HTMLElement) {
  const form = document.createElement("form");
  form.classList.add("form");

  const emailInput = createInput(
    "text",
    styles["input-email"],
    "input-email",
    "input-email",
    true,
  );
  emailInput.placeholder = "Enter your email address:";
  const nameInput = createInput(
    "text",
    styles["input-name"],
    "input-name",
    "input-name",
    true,
  );
  nameInput.placeholder = "Name...";
  const surnameInput = createInput(
    "text",
    styles["input-surname"],
    "input-surname",
    "input-surname",
    true,
  );
  surnameInput.placeholder = "Surname...";
  const passwordInput = createInput(
    "password",
    styles["input-password"],
    "input-password",
    "input-password",
    true,
  );
  passwordInput.pattern = `[0-9a-fA-F]{6,8}`;
  passwordInput.placeholder = "write your password";

  const buttonForm = document.createElement("button");
  buttonForm.type = "button";
  buttonForm.textContent = "SEND";
  buttonForm.classList.add("button-form");

  buttonForm.addEventListener("click", () => {
    if (
      checkRegisstrationForm(emailInput, nameInput, surnameInput, passwordInput)
    ) {
      apiCreateCustomer(emailInput, nameInput, surnameInput, passwordInput);
    }
  });

  form.append(emailInput, nameInput, surnameInput, passwordInput, buttonForm);
  parent.append(form);
}
