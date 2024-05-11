import { checkRegisstrationForm } from "../../checks/checkRegisstrationForm";
import { apiCreateCustomer } from "../../../apiRequests/apiCreateCustomer";
import { setDateOfBirth } from "../../../apiRequests/setDateOfBirth";
import { apiAddAdress } from "../../../apiRequests/apiAddAdress";
import { route } from "../../../router/route";

export function createFormHandlers(): void {
  const form = document.querySelector(".form") as HTMLFormElement;
  const buttonForm = document.querySelector(
    ".button-form",
  ) as HTMLButtonElement;
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
