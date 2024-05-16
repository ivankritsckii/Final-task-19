import { Result } from "../../../helpers/interfaces/Results";
import { createElement } from "../../../helpers/creators/createElement";

export function createPriceBlock(product: Result): HTMLElement {
  const current = product.masterData.current;

  const priceBlock = createElement("div", "price-block");
  const pricesText = createElement("div", "prices");
  const price = createElement(
    "span",
    "price",
    String(current.masterVariant.prices[0].value.centAmount / 100) + "$",
  );
  const buttonSend = createElement("button", "product__button", "SEND");

  if (current.masterVariant.prices[0].discounted) {
    const cost =
      current.masterVariant.prices[0].value.centAmount -
      current.masterVariant.prices[0].discounted.value.centAmount;
    const discoundPrice = createElement(
      "span",
      "price",
      String(cost / 100) + "$",
    );
    discoundPrice.classList.add("price_discound");
    price.classList.add("price_irrelevant");

    pricesText.append(discoundPrice, price);
  } else {
    pricesText.append(price);
  }
  priceBlock.append(pricesText, buttonSend);

  return priceBlock;
}
