import { Current } from "../../interfaces/Current";
import { Result } from "../../interfaces/Results";
import { createElement } from "../createElement";
import { createImage } from "../createImage";
import { route } from "../../../router/route";

const styles = require("./content.module.scss");

export function createCard(product: Result): HTMLElement {
  const current: Current = product.masterData.current;
  const cardLink = document.createElement("a");
  cardLink.classList.add("card-link");
  cardLink.href = `#${product.masterData.current.slug.en}`;
  cardLink.id = `${product.id}`;
  cardLink.addEventListener("click", (event: Event) => {
    event.preventDefault();
    route(cardLink.href, cardLink.id);
  });

  const cardBody = createElement("div", styles.card);

  cardLink.append(cardBody);

  const cardImage = createImage(
    styles.card__image,
    current.masterVariant.images[0].url,
    current.masterVariant.sku,
    current.masterVariant.images[0].dimensions.w,
    current.masterVariant.images[0].dimensions.h,
  );
  const cardDescr = createElement("div", styles.card__description);
  const nameRU = current.name.ru;
  const cardNameRU = createElement("span", styles.card__name, nameRU);
  const price = current.masterVariant.prices[0].value.centAmount / 100;
  const discountPrice = current.masterVariant.prices[0].discounted?.value.centAmount;
  const cardPrice = createElement("span", styles.card__price, `${price}$`);

  const priceBlock = createElement("div", "price-block");

  if (discountPrice) {
    const cardDiscound = createElement("span", styles.card__discound, `${discountPrice / 100}$`);
    cardPrice.classList.add(styles.card__price_inactive);

    priceBlock.append(cardDiscound, cardPrice);
    cardDescr.append(cardNameRU, priceBlock);
  } else {
    priceBlock.append(cardPrice);
    cardDescr.append(cardNameRU, priceBlock);
  }

  cardDescr.append(priceBlock);
  cardBody.append(cardImage, cardDescr);
  return cardLink;
}
