import { createElement } from "../createElement";
import { createInput } from "../createInput";

export function choiseAddress(): HTMLElement {
  const select = createElement(
    "select",
    "default-address",
    "",
    "default-address",
  ) as HTMLSelectElement;
  const selectLabel = createElement(
    "label",
    "default-address__label",
    "what is the default address?",
  ) as HTMLLabelElement;
  selectLabel.htmlFor = "";
  const optionShipping = createElement(
    "option",
    "option",
    "Shipping",
  ) as HTMLOptionElement;
  optionShipping.value = "Shipping";
  const optionBilling = createElement(
    "option",
    "option",
    "Billing",
  ) as HTMLOptionElement;
  optionShipping.value = "Billing";
  const selectWrapper = createElement("div", "address-wrapper");

  select.append(optionShipping, optionBilling);
  selectWrapper.append(selectLabel, select);

  const oneAddress = createElement("fieldset", "fieldset-address");
  const oneAddressLegend = createElement("span", "legend-address");
  oneAddressLegend.textContent =
    "use default address for billing and shipping?";
  const oneAddressInput = createInput(
    "checkbox",
    "one-address",
    "one-address",
    "one-address",
    false,
  );
  oneAddressInput.checked = true;
  oneAddress.append(oneAddressLegend, oneAddressInput);

  const choiseAdress = createElement("div", "choises");
  choiseAdress.classList.add("adress");
  choiseAdress.append(selectWrapper, oneAddress);
  return choiseAdress;
}
