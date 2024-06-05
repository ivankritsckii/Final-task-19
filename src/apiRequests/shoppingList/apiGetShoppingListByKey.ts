import { ShoppingList } from "../../helpers/interfaces/ShoppingList";

export async function apiGetShoppingListByKey(shoppingKey: string): Promise<ShoppingList | boolean> {
  const myHeaders = new Headers();
  const token = sessionStorage.getItem("token");
  const tokenType = sessionStorage.getItem("token-type");
  myHeaders.append("Authorization", `${tokenType} ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" as const,
  };

  try {
    const response = await fetch(
      `https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/shopping-lists/key=${shoppingKey}`, // delete -shopping-list
      requestOptions,
    );
    const result = await response.text();

    // такой корзины нет, (значит пользователь анонимный + у него нет корзины) создаем корзину
    if (JSON.parse(result).statusCode === 404) {
      return false;
    }

    const json = JSON.parse(result) as ShoppingList;
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
}
