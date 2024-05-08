import { Result } from "../../interfaces/Results";
import { createCard } from "./createCard";

export function createContent(parent: HTMLElement, element: Result): void {
  const cardProduct = createCard(element);
  parent.append(cardProduct);
}
