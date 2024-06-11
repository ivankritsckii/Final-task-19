import { addFilterSorted } from "../../modules/sorted/addFilterSorted";
import { createElement } from "./createElement";
import { redrawProducts } from "../../modules/filter/redrawProducts";
import { apiGetDiscountCodes } from "../../apiRequests/shoppingList/apiGetDiscountCodes";

export async function createProductsPage(): Promise<void> {
  const content = document.getElementById("content") as HTMLElement;
  content.innerHTML = "";

  let productsWrapper = document.querySelector(".productsMain") as HTMLDivElement;
  if (!productsWrapper) {
    productsWrapper = createElement("div", "productsMain") as HTMLDivElement;
    const discountCodes = document.createElement("div");
    discountCodes.classList.add("discount_codes_wraper");
    const a = await apiGetDiscountCodes(discountCodes);
    console.log(a, 1000000);
    productsWrapper.append(discountCodes);
    content.append(productsWrapper);
  }

  addFilterSorted(productsWrapper);
  redrawProducts();
}
