import { changeAddress } from "../../change/changeAddress";
import { createElement } from "../createElement";
import { createInput } from "../createInput";
import { activateInput } from "./activateInput";

export function profileChangeAddress(
  addressId: string,
  wrapperClass: string,
  city: string,
  postcode: string,
  street: string,
  house: string,
  apartment: string,
): HTMLElement {
  const wrapper = createElement("div", "profile-inform");
  wrapper.classList.add("profile-inform_address", wrapperClass);
  wrapper.setAttribute("name", addressId);

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
    saveButton.classList.toggle("profile-inform-address__save_disable");
    activateInput(buttonsBlock);
  });
  const saveButton = createElement("div", "profile-inform__save", "save");
  saveButton.classList.add("profile-inform-address__save", "profile-inform-address__save_disable");
  saveButton.addEventListener("click", () => {
    if (saveButton.classList.contains("profile-inform-address__save_disable")) return;
    changeAddress(wrapper);
  });
  buttonsBlock.append(editButton, saveButton);

  wrapper.append(cityInput, postcodeInput, streetInput, houseInput, apartmentInput, buttonsBlock);
  return wrapper;
}
