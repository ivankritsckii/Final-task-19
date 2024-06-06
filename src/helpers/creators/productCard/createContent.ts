import { Result } from "../../interfaces/Results";
import { createCard } from "./createCard";
import { checkFilters } from "../../checks/checkFilters";

export async function createContent(parent: HTMLElement, element: Result): Promise<void> {
  if (!checkFilters(element)) {
    return;
  }
  const cardProduct = await createCard(element);
  parent.append(cardProduct);
}
