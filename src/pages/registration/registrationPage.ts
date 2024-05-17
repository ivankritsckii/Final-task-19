import { apiCreateCustomer } from "../../apiRequests/apiCreateCustomer";
import { createInput } from "../../helpers/creators/createInput";
import { checkRegisstrationForm } from "../../helpers/checks/checkRegisstrationForm";
const styles = require("./form.module.scss");

export function registrationPage(parent: HTMLElement) {
  parent.innerHTML = "";
  const form = document.createElement("form");
  form.classList.add("form");
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add(styles.fieldset);
  const legend = document.createElement("legend");
  legend.textContent = "Create account";

  const emailInput = createInput(
    "text",
    styles.input_registration,
    "input-email",
    "input-email",
    true,
  );
  const emailLabel = document.createElement("label");
  emailLabel.textContent =
    "email incorrect, write your email like a: john.doe@example.com";
  emailLabel.classList.add(styles["label-registration"], "emailLabel");
  emailInput.placeholder = "yourmail@gmail.com";
  const nameInput = createInput(
    "text",
    styles.input_registration,
    "input-name",
    "input-name",
    true,
  );
  const nameLabel = document.createElement("label");
  nameLabel.textContent =
    "name incorrect! only latin, first letter capitalized, min 3 letters";
  nameLabel.classList.add(styles["label-registration"], "nameLabel");
  nameInput.placeholder = "Thomas";
  const surnameInput = createInput(
    "text",
    styles.input_registration,
    "input-surname",
    "input-surname",
    true,
  );
  surnameInput.placeholder = "Anderson";
  const surnameLabel = document.createElement("label");
  surnameLabel.textContent =
    "surname incorrect! only latin, first letter capitalized, min 3 letters";
  surnameLabel.classList.add(styles["label-registration"], "surnameLabel");
  const passwordInput = createInput(
    "password",
    styles.input_registration,
    "input-password",
    "input-password",
    true,
  );
  passwordInput.placeholder = "******";
  const passwordLabel = document.createElement("label");
  passwordLabel.innerHTML = `password incorrect! At least one lowercase and uppercase letter, at least one digit. <br> Minimum length of 8 characters`;
  passwordLabel.classList.add(styles["label-registration"], "passwordLabel");

  const buttonForm = document.createElement("button");
  buttonForm.type = "button";
  buttonForm.textContent = "Register";
  buttonForm.classList.add("button-form");

  form.addEventListener("keypress", function (e) {
    const key = e.code;
    if (key.toString() === "Enter" || key.toString() === "NumpadEnter") {
      buttonForm.click();
    }
  });

  buttonForm.addEventListener("click", () => {
    if (
      checkRegisstrationForm(emailInput, nameInput, surnameInput, passwordInput)
    ) {
      apiCreateCustomer(emailInput, nameInput, surnameInput, passwordInput);
    }
  });

  form.append(fieldset);
  fieldset.append(
    legend,
    emailInput,
    emailLabel,
    nameInput,
    nameLabel,
    surnameInput,
    surnameLabel,
    passwordInput,
    passwordLabel,
    buttonForm,
  );
  parent.append(form);
}
