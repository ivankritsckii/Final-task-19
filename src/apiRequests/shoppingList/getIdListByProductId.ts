import { LineItem } from "../../helpers/interfaces/LineItem";
import { ShoppingList } from "../../helpers/interfaces/ShoppingList";
import { getCustomerById } from "../getCustomerById";
import { apiGetShoppingListByKey } from "./apiGetShoppingListByKey";

export async function getIdListByProductId(productId: string): Promise<LineItem | boolean> {
  const userID = localStorage.getItem("customerId");
  if (!userID) return false;
  const customer = await getCustomerById(userID);
  const customerShoppingList = (await apiGetShoppingListByKey(customer.firstName)) as ShoppingList;
  const lineItems = customerShoppingList.lineItems as LineItem[];
  let result;

  lineItems.forEach((line) => {
    if (line.productId === productId) {
      result = line;
    }
  });
  return result || false;
}
