import { getCustomerById } from "../getCustomerById";
import { apiCreateAnonymousShoppingList } from "./apiCreateAnonymousShoppingList";
import { apiCreateShoppingList } from "./apiCreateShoppingList";
import { apiGetShoppingList } from "./apiGetShoppingList";
import { ShoppingList } from "../../helpers/interfaces/ShoppingList";

export async function createBasket(): Promise<ShoppingList> {
  const user = localStorage.getItem("customerId");
  const customer = user ? await getCustomerById(user) : false;
  const token = sessionStorage.getItem("token");

  // если пользователь вошел в систему
  if (user) {
    const shoppingList = (await apiGetShoppingList()) as ShoppingList;
    const newShoppingList = (await apiCreateShoppingList(customer.firstName)) as ShoppingList;
    localStorage.setItem("basketKey", `${customer.firstName}-shopping-list`);
    return shoppingList || newShoppingList;
  } else {
    // анонимный пользователь
    const anonymousShoppingList = (await apiGetShoppingList()) as ShoppingList;

    // проверяем есть ли анонимная корзина
    if (typeof anonymousShoppingList != "boolean") {
      return anonymousShoppingList;
    } else {
      // создаем анонимную корзину
      await apiCreateAnonymousShoppingList();
      sessionStorage.setItem("basketKey", `Anonymous-${token}-shopping-list`);
      return (await apiGetShoppingList()) as ShoppingList;
    }
  }
}
