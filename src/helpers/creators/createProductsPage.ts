import { addFilterSorted } from "../../modules/sorted/addFilterSorted";
import { createElement } from "./createElement";
import { redrawProducts } from "../../modules/filter/redrawProducts";

export async function createProductsPage(): Promise<void> {
  const content = document.getElementById("content") as HTMLElement;
  content.innerHTML = "";

  let productsWrapper = document.querySelector(".productsMain") as HTMLDivElement;
  if (!productsWrapper) {
    productsWrapper = createElement("div", "productsMain") as HTMLDivElement;
    content.append(productsWrapper);
  }

  addFilterSorted(productsWrapper);
  redrawProducts();
}
