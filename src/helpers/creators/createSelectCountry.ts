import { createElement } from "./createElement";

export function createSelectCountry(): HTMLSelectElement {
  const select = createElement("select", "select-country", "", "country") as HTMLSelectElement;
  const optionRU = createElement("option", "option", "RU") as HTMLOptionElement;
  optionRU.value = "RU";
  const optionBY = createElement("option", "option", "BY") as HTMLOptionElement;
  optionBY.value = "BY";
  const optionUA = createElement("option", "option", "UA") as HTMLOptionElement;
  optionUA.value = "UA";
  select.append(optionRU, optionBY, optionUA);
  return select;
}
