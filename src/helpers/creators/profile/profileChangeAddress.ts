import { createElement } from "../createElement";
import { createInput } from "../createInput";
import { createSelectCountry } from "../createSelectCountry";
import { activateInput } from "./activateInput";

export function profileChangeAddress(
  addressId: string,
  wrapperClass: string,
  country: string,
  city: string,
  postcode: string,
  street: string,
  house: string,
  apartment: string,
): HTMLElement {
  const wrapper = createElement("div", "profile-inform");
  wrapper.classList.add("profile-inform_address", wrapperClass, "profile-inform_disable");
  wrapper.setAttribute("name", addressId);

  const countryBlock = createSelectCountry();
  const options = countryBlock.options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === country) {
      options[i].selected = true;
      break;
    }
  }
  countryBlock.disabled = true;

  const cityInput = createInput("text", "profile-inform__input", "inform__city", "", false);
  cityInput.value = city;
  cityInput.disabled = true;

  const postcodeInput = createInput("number", "profile-inform__input", "inform__postcode", "", false);
  postcodeInput.value = postcode;
  postcodeInput.disabled = true;

  const streetInput = createInput("text", "profile-inform__input", "inform__street", "", false);
  streetInput.value = street;
  streetInput.disabled = true;

  const houseInput = createInput("text", "profile-inform__input", "inform__house", "", false);
  houseInput.value = house;
  houseInput.disabled = true;

  const apartmentInput = createInput("number", "profile-inform__input", "inform__apartment", "", false);
  apartmentInput.value = apartment;
  apartmentInput.disabled = true;

  const buttonsBlock = createElement("div", "profile-inform-buttons");

  const editButton = createElement("div", "profile-inform__edit", "edit");
  editButton.classList.add("profile-inform-address__edit");
  editButton.addEventListener("click", () => {
    if (editButton.classList.contains("disable_btn")) return;
    activateInput(buttonsBlock);
    saveButton.classList.remove("profile-inform__save_disable");
    editButton.classList.add("disable_btn");
  });
  const saveButton = createElement("div", "profile-inform__save", "save");
  saveButton.classList.add("profile-inform__save_disable");
  buttonsBlock.append(editButton, saveButton);

  wrapper.append(countryBlock, cityInput, postcodeInput, streetInput, houseInput, apartmentInput, buttonsBlock);
  saveButton.addEventListener("click", () => {
    if (saveButton.classList.contains("profile-inform__save_disable")) return;
    changeAddress(wrapper);
    activateInput(buttonsBlock);
    saveButton.classList.add("profile-inform__save_disable");
    editButton.classList.remove("disable_btn");
  });
  return wrapper;
}
