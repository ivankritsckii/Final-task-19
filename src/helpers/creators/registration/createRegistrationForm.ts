//import { createElement } from "../createElement";
import { createInputBlock } from "../createInputBlock";
import { addAdressBlock } from "../../../pages/registration/adress/adress";
const styles = require("./form.module.scss");

export function createRegistrationForm(parent: HTMLElement): void {
  parent.innerHTML = "";
  const form = document.createElement("form");
  form.classList.add("form");
  const fieldset = document.createElement("fieldset");
  fieldset.classList.add(styles.fieldset);
  const legend = document.createElement("legend");
  legend.textContent = "Create account";

  const emailBlock = createInputBlock(
    "email incorrect, write your email like a: john.doe@example.com",
    "input-email",
    "text",
    true,
    "yourmail@gmail.com",
  );

  const nameBlock = createInputBlock(
    "name incorrect! only latin, first letter capitalized, min 3 letters",
    "input-name",
    "text",
    true,
    "Thomas",
  );

  const surnameBlock = createInputBlock(
    "surname incorrect! only latin, first letter capitalized, min 3 letters",
    "input-surname",
    "text",
    true,
    "Anderson",
  );

  const passwordBlock = createInputBlock(
    `password incorrect! At least one lowercase and uppercase letter, at least one digit. Minimum length of 8 characters`,
    "input-password",
    "password",
    true,
    "password",
  );

  const buttonForm = document.createElement("button");
  buttonForm.type = "button";
  buttonForm.textContent = "Register";
  buttonForm.classList.add("button-form");

  form.append(fieldset);
  fieldset.append(legend, emailBlock, nameBlock, surnameBlock, passwordBlock);
  addAdressBlock(fieldset);
  fieldset.append(buttonForm);
  parent.append(form);
}
