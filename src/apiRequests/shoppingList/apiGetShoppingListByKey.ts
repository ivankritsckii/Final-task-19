import { ShoppingList } from "../../helpers/interfaces/ShoppingList";

export async function apiGetShoppingListByKey(shoppingKey: string): Promise<ShoppingList | boolean> {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `${sessionStorage.getItem("token-type")} ${sessionStorage.getItem("token")}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" as const,
  };

  try {
    const response = await fetch(
      `https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/shopping-lists/key=${shoppingKey}-shopping-list`,
      requestOptions,
    );
    const result = await response.text();
    const json = JSON.parse(result) as ShoppingList;
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
}
