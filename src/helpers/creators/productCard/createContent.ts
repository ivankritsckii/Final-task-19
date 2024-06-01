import { Result } from "../../interfaces/Results";
import { createCard } from "./createCard";
import { checkFilters } from "../../checks/checkFilters";

export function createContent(parent: HTMLElement, element: Result): void {
  if (!checkFilters(element)) {
    return;
  }
  const cardProduct = createCard(element);
  parent.append(cardProduct);
}
