import { apiAddProductToShoppingList } from "../../../apiRequests/shoppingList/apiAddProductToShoppingList";
import { apiDeleteProductToShoppingList } from "../../../apiRequests/shoppingList/apiDeleteProductToShoppingList";
import { checkProductInBasket } from "../../checks/checkProductInBasket";
import { createElement } from "../createElement";
import { createLink } from "../createLink";

export async function createBuyBlock(idProduct: string): Promise<HTMLElement> {
  const buyBlock = createElement("div", "buy-block");
  const buyButton = createElement("button", "button__buy", "buy");
  const basketButton = createLink("button__basket", "#basket", false);
  basketButton.textContent = "to basket";
  basketButton.classList.add("button_disable");
  const minusButton = createElement("div", "button__delete", "-");
  minusButton.classList.add("button_disable");
  const plusButton = createElement("div", "button__add", "+");
  plusButton.classList.add("button_disable");
  const countProduct = createElement("span", "product-count");
  countProduct.classList.add("button_disable");
  countProduct.textContent = await checkProductInBasket(idProduct);
  const counterBlock = createElement("div", "counter-block");
  counterBlock.append(basketButton, minusButton, countProduct, plusButton);
  buyBlock.append(buyButton, counterBlock);

  const arrayButtons = [basketButton, minusButton, plusButton, countProduct];

  if (countProduct.textContent != "0") {
    showButtons(buyButton, arrayButtons);
  }

  buyButton.addEventListener("click", async (event: Event) => {
    event.preventDefault();
    await apiAddProductToShoppingList(idProduct);
    countProduct.textContent = await checkProductInBasket(idProduct);

    showButtons(buyButton, arrayButtons);
  });
  plusButton.addEventListener("click", async () => {
    await apiAddProductToShoppingList(idProduct);
    countProduct.textContent = await checkProductInBasket(idProduct);
  });
  minusButton.addEventListener("click", async () => {
    await apiDeleteProductToShoppingList(idProduct);
    countProduct.textContent = await checkProductInBasket(idProduct);
    if (countProduct.textContent === "0") {
      disableButtons(buyButton, arrayButtons);
    }
  });

  return buyBlock;
}

function showButtons(buy: HTMLElement, array: HTMLElement[]) {
  buy.classList.add("button_disable");
  array.forEach((element) => {
    element.classList.remove("button_disable");
  });
}

function disableButtons(buy: HTMLElement, array: HTMLElement[]) {
  buy.classList.remove("button_disable");
  array.forEach((element) => {
    element.classList.add("button_disable");
  });
}
