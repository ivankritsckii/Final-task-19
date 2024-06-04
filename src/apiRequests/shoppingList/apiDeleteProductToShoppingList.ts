import { LineItem } from "../../helpers/interfaces/LineItem";
import { ShoppingList } from "../../helpers/interfaces/ShoppingList";
import { getCustomerById } from "../getCustomerById";
import { apiGetShoppingListByKey } from "./apiGetShoppingListByKey";
import { getIdListByProductId } from "./getIdListByProductId";

export async function apiDeleteProductToShoppingList(idProduct: string) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `${sessionStorage.getItem("token-type")} ${sessionStorage.getItem("token")}`);

  const userID = localStorage.getItem("customerId");
  if (!userID) return; // заглушка
  const customer = await getCustomerById(userID);
  const customerShoppingList = (await apiGetShoppingListByKey(customer.firstName)) as ShoppingList;
  const idLineItem = (await getIdListByProductId(idProduct)) as LineItem;

  if (!customerShoppingList) return;
  if (!idLineItem.quantity) {
    console.log("ТОВАРА БОЛЬШЕ НЕТ");
    return;
  }

  const raw = JSON.stringify({
    version: customerShoppingList ? customerShoppingList.version : 1,
    actions: [
      {
        action: "changeLineItemQuantity",
        lineItemId: idLineItem.id,
        quantity: idLineItem.quantity - 1,
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as const,
  };

  try {
    const response = await fetch(
      `https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/shopping-lists/${customerShoppingList.id}`,
      requestOptions,
    );
    const result = await response.text();
    const json = JSON.parse(result);
    return json;
  } catch (error) {
    console.log(error);
  }
}
