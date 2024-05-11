import { apiCreateCustomer } from "../../apiRequests/apiCreateCustomer";
//import { createInputBlock } from "../../helpers/creators/createInputBlock";
import { checkRegisstrationForm } from "../../helpers/checks/checkRegisstrationForm";
//import { addAdressBlock } from "./adress/adress";
import { setDateOfBirth } from "../../apiRequests/setDateOfBirth";
import { apiAddAdress } from "../../apiRequests/apiAddAdress";
import { route } from "../../router/route";
import { createRegistrationForm } from "../../helpers/creators/registration/createRegistrationForm";
//const styles = require("./form.module.scss");

export function registrationPage(parent: HTMLElement): void {
  createRegistrationForm(parent);
  /*parent.innerHTML = "";
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
  parent.append(form);*/

  form.addEventListener("keypress", function (e) {
    const key = e.code;
    if (key.toString() === "Enter" || key.toString() === "NumpadEnter") {
      buttonForm.click();
    }
  });

  const emailInput = document.getElementById("input-email") as HTMLInputElement;
  const nameInput = document.getElementById("input-name") as HTMLInputElement;
  const surnameInput = document.getElementById(
    "input-surname",
  ) as HTMLInputElement;
  const passwordInput = document.getElementById(
    "input-password",
  ) as HTMLInputElement;
  buttonForm.addEventListener("click", async () => {
    if (checkRegisstrationForm()) {
      const birthInput = document.getElementById("birth") as HTMLInputElement;
      const countryInput = document.getElementById(
        "country",
      ) as HTMLSelectElement;
      const cityInput = document.getElementById("city") as HTMLInputElement;
      const postcodeInput = document.getElementById(
        "postcode",
      ) as HTMLInputElement;
      const streetInput = document.getElementById("street") as HTMLInputElement;
      const buildingInput = document.getElementById(
        "building",
      ) as HTMLInputElement;
      const apartmentInput = document.getElementById(
        "apartment",
      ) as HTMLInputElement;
      apiCreateCustomer(emailInput, nameInput, surnameInput, passwordInput)
        .then((json) => {
          const clientId = json.customer.id;
          setDateOfBirth(clientId, birthInput.value).then(() => {
            apiAddAdress(
              clientId,
              nameInput.value,
              surnameInput.value,
              emailInput.value,
              countryInput.value,
              cityInput.value,
              streetInput.value,
              postcodeInput.value,
              buildingInput.value,
              apartmentInput.value,
            ).then(() => {
              route(window.location.origin);
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
}
