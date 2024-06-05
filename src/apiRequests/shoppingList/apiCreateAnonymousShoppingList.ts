import { apiGetShoppingListByKey } from "./apiGetShoppingListByKey";

export async function apiCreateAnonymousShoppingList() {
  const myHeaders = new Headers();
  const token = sessionStorage.getItem("token");
  const tokenType = sessionStorage.getItem("token-type");
  myHeaders.append("Authorization", `${tokenType} ${token}`);

  const anonymousShoppingList = await apiGetShoppingListByKey(`Anonymous-${token}`);

  // У ЭТОГО АНОНИМА УЖЕ ЕСТЬ КОРЗИНА
  if (typeof anonymousShoppingList != "boolean") {
    return anonymousShoppingList;
  }

  const raw = JSON.stringify({
    name: {
      en: `Anonymous-${token} shopping list`,
    },
    slug: {
      en: `Anonymous-${token}-shopping-list`,
    },
    key: `Anonymous-${token}-shopping-list`,
    deleteDaysAfterLastModification: 3,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as const,
  };

  try {
    const response = await fetch(
      `https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/shopping-lists`,
      requestOptions,
    );
    const result = await response.text();
    const json = JSON.parse(result);
    return json;
  } catch (error) {
    console.log(error);
  }
}
