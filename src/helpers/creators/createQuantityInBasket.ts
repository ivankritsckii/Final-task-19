import { apiGetShoppingList } from "../../apiRequests/shoppingList/apiGetShoppingList";

export async function createQualityInBasket() {
  const qualityWraper = document.querySelector(".count_product_wraper") as HTMLElement;
  const list = await apiGetShoppingList();
  if (list) {
    console.log(qualityWraper);
    qualityWraper.innerHTML = `${list.lineItems.length}`;
  }
}
