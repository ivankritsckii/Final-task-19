import { getCustomerById } from "../getCustomerById";
import { apiGetShoppingListByKey } from "./apiGetShoppingListByKey";

export async function apiCreateShoppingList(customerId: string) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `${sessionStorage.getItem("token-type")} ${sessionStorage.getItem("token")}`);

  const customer = await getCustomerById(customerId);
  const customerShoppingList = await apiGetShoppingListByKey(customer.firstName);

  if (customerShoppingList) {
    return customerShoppingList;
  }

  const raw = JSON.stringify({
    name: {
      en: `${customer.firstName} shopping list`,
    },
    slug: {
      en: `${customer.firstName}-shopping-list`,
    },
    customer: {
      typeId: "customer",
      id: `${customerId}`,
    },
    key: `${customer.firstName}-shopping-list`,
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
