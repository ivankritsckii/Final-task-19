import { Result } from "../../../helpers/interfaces/Results";
import { createElement } from "../../../helpers/creators/createElement";
import { getProductDiscountById } from "../../../apiRequests/getProductDiscountById";
import { apiCreateShoppingList } from "../../../apiRequests/shoppingList/apiCreateShoppingList";
import { apiAddProductToShoppingList } from "../../../apiRequests/shoppingList/apiAddProductToShoppingList";
import { getCustomerById } from "../../../apiRequests/getCustomerById";
import { apiGetShoppingListByKey } from "../../../apiRequests/shoppingList/apiGetShoppingListByKey";
import { apiDeleteProductToShoppingList } from "../../../apiRequests/shoppingList/apiDeleteProductToShoppingList";
import { apiCreateAnonymousShoppingList } from "../../../apiRequests/shoppingList/apiCreateAnonymousShoppingList";
import { ShoppingList } from "../../../helpers/interfaces/ShoppingList";

export async function createPriceBlock(product: Result): Promise<HTMLElement> {
  const current = product.masterData.current;
  const user = localStorage.getItem("customerId");
  const customer = user ? await getCustomerById(user) : false;

  const priceBlock = createElement("div", "price-block");
  const pricesText = createElement("div", "prices");
  const price = createElement("span", "price", String(current.masterVariant.prices[0].value.centAmount / 100) + "$");
  const buttonSend = createElement("button", "login-btn-grad", "Add");
  buttonSend.addEventListener("click", async () => {
    // если пользователь залогинен
    if (user) {
      const newShoppingList = (await apiCreateShoppingList(customer.id)) as ShoppingList;
      await apiAddProductToShoppingList(product.id, newShoppingList);

      console.log(
        `Корзина пользователя ${customer.firstName}, после добавления товара:`,
        await apiGetShoppingListByKey(customer.firstName),
      );
    } else {
      // анонимный пользователь
      const token = sessionStorage.getItem("token");
      const anonymousShoppingList = await apiGetShoppingListByKey(`Anonymous-${token}-shopping-list`);
      // проверяем есть ли анонимная корзина
      if (typeof anonymousShoppingList != "boolean") {
        await apiAddProductToShoppingList(product.id, anonymousShoppingList);
        console.log(
          "Анонимная корзина, после добавления товара:",
          await apiGetShoppingListByKey(`Anonymous-${token}-shopping-list`),
        );
      } else {
        // создаем анонимную корзину
        const newAnonymousShoppingList = await apiCreateAnonymousShoppingList();
        await apiAddProductToShoppingList(product.id, newAnonymousShoppingList);
        console.log(
          "Создали анонимную корзину и добавили в нее товар:",
          await apiGetShoppingListByKey(`Anonymous-${token}-shopping-list`),
        );
      }
    }
  });

  const buttonDelete = createElement("button", "login-btn-grad", "Delete");
  buttonDelete.addEventListener("click", async () => {
    // если пользователь залогинен
    if (user) {
      const newShoppingList = (await apiCreateShoppingList(customer.id)) as ShoppingList;
      await apiDeleteProductToShoppingList(product.id, newShoppingList);
      console.log(
        `Корзина пользователя ${customer.firstName}, после удаления товара`,
        await apiGetShoppingListByKey(customer.firstName),
      );
    } else {
      // анонимный пользователь
      const token = sessionStorage.getItem("token");
      const anonymousShoppingList = await apiGetShoppingListByKey(`Anonymous-${token}-shopping-list`);

      // проверяем есть ли такая анонимная корзина
      if (typeof anonymousShoppingList != "boolean") {
        await apiDeleteProductToShoppingList(product.id, anonymousShoppingList);
        console.log(
          "Анонимная корзина, после удаления товара:",
          await apiGetShoppingListByKey(`Anonymous-${token}-shopping-list`),
        );
      } else {
        return;
      }
    }
  });

  if (current.masterVariant.prices[0].discounted) {
    const discoundId = current.masterVariant.prices[0].discounted.discount.id;
    const discoundResult = await getProductDiscountById(discoundId);
    const discundDescription = createElement("span", "price__description", "(" + discoundResult.description.en + ")");

    const discoundPrice = createElement(
      "span",
      "price",
      String(current.masterVariant.prices[0].discounted.value.centAmount / 100) + "$",
    );
    discoundPrice.classList.add("price_discound");
    price.classList.add("price_irrelevant");

    pricesText.append(discoundPrice, price, discundDescription);
  } else {
    pricesText.append(price);
  }
  priceBlock.append(pricesText, buttonSend, buttonDelete);

  return priceBlock;
}
