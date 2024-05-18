import { Result } from "../../../helpers/interfaces/Results";
import { createElement } from "../../../helpers/creators/createElement";

export function createTextBlock(product: Result): HTMLElement {
  const textBlock = createElement("div", "text-block");
  const name = createElement(
    "h1",
    "product__name",
    product.masterData.current.name.en,
  );
  const description = createElement(
    "p",
    "product__description",
    product.masterData.current.description.en,
  );

  textBlock.append(name, description);

  return textBlock;
}
