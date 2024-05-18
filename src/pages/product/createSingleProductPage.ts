import { Result } from "../../helpers/interfaces/Results";
import { createElement } from "../../helpers/creators/createElement";
import { createImageBlock } from "./blocks/createImageBlock";
import { createCategoriesBlock } from "./blocks/createCategoriesBlock";
import { createTextBlock } from "./blocks/createTextBlock";
import { createPriceBlock } from "./blocks/createPriceBlock";
const styles = require("./singleProductPage.module.scss");

export async function createSingleProductPage(product: Result): Promise<void> {
  const content = document.querySelector(".content") as HTMLDivElement;
  content.innerHTML = "";

  const productWrapper = createElement("div", styles.product);

  const categoriesBlock = createCategoriesBlock(product);
  const imageBlock = createImageBlock(product);
  const textBlock = createTextBlock(product);
  const priceBlock = await createPriceBlock(product);

  productWrapper.append(categoriesBlock, imageBlock, priceBlock, textBlock);
  content.append(productWrapper);

  const firstImg = document.querySelector(".image") as HTMLImageElement;
  firstImg.classList.add("image__active");
  const firstImgCurrent = document.querySelector(".image-current") as HTMLImageElement;
  firstImgCurrent.classList.add("image-current__active");
}
