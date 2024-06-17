import { apiGetShoppingList } from "../../apiRequests/shoppingList/apiGetShoppingList";

export async function createQualityInBasket() {
  const qualityWraper = document.querySelector(".count_product_wraper") as HTMLElement;
  const list = await apiGetShoppingList();
  if (list && list.lineItems) {
    console.log(list);
    qualityWraper.innerHTML = `${list.lineItems.length}`;
  }
}
