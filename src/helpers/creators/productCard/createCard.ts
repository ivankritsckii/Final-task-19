import { Current } from "../../interfaces/Current";
import { Result } from "../../interfaces/Results";
import { createElement } from "../createElement";
import { createImage } from "../createImage";
import { showProduct } from "../../../pages/main/content/showProduct";
import { loading } from "../../../modules/loading/loading";
const styles = require("./content.module.scss");

export function createCard(product: Result): HTMLElement {
  const current: Current = product.masterData.current;
  //const currentUrl = window.location.href + product.slug.en;
  const cardBody = createElement("div", styles.card, "", product.id);
  cardBody.addEventListener("click", (event) => {
    console.log("click");
    console.log(event);
    if (event.target instanceof HTMLElement) {
      loading();
      if (event.target.classList.contains("card")) {
        showProduct(event.target);
      }
      if (event.target.parentElement?.classList.contains("card")) {
        showProduct(event.target.parentElement);
      }
    }
  });

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
  const discountPrice =
    current.masterVariant.prices[0].discounted?.value.centAmount;
  const cardPrice = createElement("span", styles.card__price, `${price}$`);

  if (discountPrice) {
    const cardDiscound = createElement(
      "span",
      styles.card__discound,
      `${discountPrice / 100}$`,
    );
    cardPrice.classList.add(styles.card__price_inactive);

    cardDescr.append(cardNameRU, cardDiscound, cardPrice);
  } else {
    cardDescr.append(cardNameRU, cardPrice);
  }

  cardBody.append(cardImage, cardDescr);
  return cardBody;
}
