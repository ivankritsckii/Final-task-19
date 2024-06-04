import { ShoppingList } from "../../helpers/interfaces/ShoppingList";
import { apiGetProductById } from "../apiGetProductById";
import { getCustomerById } from "../getCustomerById";
import { apiGetShoppingListByKey } from "./apiGetShoppingListByKey";

export async function apiAddProductToShoppingList(idProduct: string) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `${sessionStorage.getItem("token-type")} ${sessionStorage.getItem("token")}`);

  const userID = localStorage.getItem("customerId");
  if (!userID) return; // заглушка
  const customer = await getCustomerById(userID);
  const customerShoppingList = (await apiGetShoppingListByKey(customer.firstName)) as ShoppingList;
  const product = await apiGetProductById(idProduct);

  if (!customerShoppingList) return;

  const raw = JSON.stringify({
    version: customerShoppingList ? customerShoppingList.version : 1,
    actions: [
      {
        action: "addLineItem",
        productId: product?.id,
        quantity: 1,
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
