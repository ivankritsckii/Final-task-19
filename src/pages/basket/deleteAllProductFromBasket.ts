import { apiGetShoppingList } from "../../apiRequests/shoppingList/apiGetShoppingList";
import { emptyBasketPageCreator } from "./emptyBasketPage";
import { apiDeleteProductToShoppingList } from "../../apiRequests/shoppingList/apiDeleteProductToShoppingList";
import { LineItem } from "../../helpers/interfaces/LineItem";

async function asyncForEach(
  arr: LineItem[],
  // eslint-disable-next-line no-unused-vars
  callback: (arr0: LineItem, i?: number, arr?: LineItem[]) => Promise<void>,
) {
  for (let i = 0; i < arr.length; i++) await callback(arr[i], i, arr);
}

export async function deleteAllProductFromBasket() {
  const list = await apiGetShoppingList();
  if (typeof list !== "boolean") {
    const arrayProductID = [...list.lineItems];

    asyncForEach(arrayProductID, async (item: LineItem) => {
      await apiDeleteProductToShoppingList(item.productId, true);
    });
  }
  emptyBasketPageCreator();
}
