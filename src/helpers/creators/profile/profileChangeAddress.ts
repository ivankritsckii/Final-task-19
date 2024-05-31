import { createElement } from "../createElement";
import { createInput } from "../createInput";
import { createSelectCountry } from "../createSelectCountry";
import { activateInput } from "./activateInput";
import { changeAddress } from "../../change/changeAddress";
import { SetDefaultBillingAddress } from "../../../apiRequests/addAddress/SetDefaultBillingAddress";
import { SetDefaultShippingAddress } from "../../../apiRequests/addAddress/SetDefaultShippingAddress";
import { ProfileChangeModalWindow } from "../../creators/profile/profileChangeModalWindow";

export function profileChangeAddress(
  addressId: string,
  wrapperClass: string,
  country: string,
  city: string,
  postcode: string,
  street: string,
  house: string,
  apartment: string,
  defaultAddressID: string,
  customerId: string,
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

  const addDefaultAddress = createElement("div", "profile-add__default", "use as default");

  if (defaultAddressID === addressId) addDefaultAddress.classList.add("profile-inform__save_disable");
  addDefaultAddress.addEventListener("click", () => {
    if (
      wrapper.classList.contains("profile-inform_shippingAddress") &&
      !addDefaultAddress.classList.contains("profile-inform__save_disable")
    ) {
      SetDefaultShippingAddress(customerId, addressId);
      ProfileChangeModalWindow(true, "Changes saved", "Now you use this addres as default shipping");
      addDefaultAddress.classList.add("profile-inform__save_disable");
      const defaulthShipping = createElement("div", "isDefaulth", "this is the default shipping address");
      defaulthShipping.classList.add("isDefaulth_Shipping");
      wrapper.classList.add("isDefaulth_Shipping");
      wrapper.prepend(defaulthShipping);
    } else if (
      wrapper.classList.contains("profile-inform_billingAddress") &&
      !addDefaultAddress.classList.contains("profile-inform__save_disable")
    ) {
      console.log("billing_address_now");
      SetDefaultBillingAddress(customerId, addressId);
      ProfileChangeModalWindow(true, "Changes saved", "Now you use this addres as default billing");
      addDefaultAddress.classList.add("profile-inform__save_disable");
      const defaulthBilling = createElement("div", "isDefaulth", "this is the default billing address");
      defaulthBilling.classList.add("isDefaulth_Billing");
      wrapper.classList.add("isDefaulth_Billing");
      wrapper.prepend(defaulthBilling);
    }
  });

  buttonsBlock.append(editButton, saveButton, addDefaultAddress);

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
