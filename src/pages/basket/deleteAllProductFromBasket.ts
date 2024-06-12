import { apiGetShoppingList } from "../../apiRequests/shoppingList/apiGetShoppingList";
import { apiDeleteAllProduct } from "../../apiRequests/shoppingList/apiDeleteAllProductFromBasket";

export async function deleteAllProductFromBasket() {
  const list = await apiGetShoppingList();
  if (typeof list !== "boolean") {
    list.lineItems.forEach(async (item) => {
      await apiDeleteAllProduct(item.productId);
    });
  }
}
