import { createElement } from "../createElement";
import { createInput } from "../createInput";
import { activateInput } from "./activateInput";

export function profileChangeAddress(
  nameInput: string,
  city: string,
  postcode: string,
  street: string,
  house: string,
  apartment: string,
): HTMLElement {
  const wrapper = createElement("div", "profile-inform");
  wrapper.classList.add("profile-inform_address");

  const cityInput = createInput(
    "text",
    "profile-inform__input",
    `inform__city-${nameInput}`,
    `inform__city-${nameInput}`,
    false,
  );
  cityInput.value = city;
  cityInput.disabled = true;

  const postcodeInput = createInput(
    "number",
    "profile-inform__input",
    `inform__postcode-${nameInput}`,
    `inform__postcode-${nameInput}`,
    false,
  );
  postcodeInput.value = postcode;
  postcodeInput.disabled = true;

  const streetInput = createInput(
    "text",
    "profile-inform__input",
    `inform__postcode-${nameInput}`,
    `inform__postcode-${nameInput}`,
    false,
  );
  streetInput.value = street;
  streetInput.disabled = true;

  const houseInput = createInput(
    "text",
    "profile-inform__input",
    `inform__house-${nameInput}`,
    `inform__house-${nameInput}`,
    false,
  );
  houseInput.value = house;
  houseInput.disabled = true;

  const apartmentInput = createInput(
    "number",
    "profile-inform__input",
    `inform__apartment-${nameInput}`,
    `inform__apartment-${nameInput}`,
    false,
  );
  apartmentInput.value = apartment;
  apartmentInput.disabled = true;

  const buttonsBlock = createElement("div", "profile-inform-buttons");

  const editButton = createElement("div", "profile-inform__edit", "edit");
  editButton.classList.add("profile-inform-address__edit");
  editButton.addEventListener("click", () => {
    activateInput(buttonsBlock);
  });
  const saveButton = createElement("div", "profile-inform__save", "save");
  saveButton.classList.add("profile-inform-address__save", "profile-inform-address__save_disable");
  buttonsBlock.append(editButton, saveButton);

  wrapper.append(cityInput, postcodeInput, streetInput, houseInput, apartmentInput, buttonsBlock);
  return wrapper;
}
