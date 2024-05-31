import { Result } from "../../../helpers/interfaces/Results";
import { createElement } from "../../../helpers/creators/createElement";
import { createImage } from "../../../helpers/creators/createImage";
import { changeActiveImage } from "../changeActiveImage";

export function createImageBlock(product: Result): HTMLElement {
  console.log(product);

  const current = product.masterData.current;
  const images = current.masterVariant.images;
  const imageBlock = createElement("div", "image-block");
  const imagesCurrentSection = createElement("div", "images");
  const imagesSmallSection = createElement("div", "images-small");

  imagesSmallSection.addEventListener("click", (event: Event) => {
    if (event.target) {
      const target = event.target as HTMLElement;
      changeActiveImage(target);
    }
  });

  images.forEach((image) => {
    const alt = current.slug.en;
    const img = createImage("image", image.url, alt, 48, 48);
    const imgCurrent = createImage("image-current", image.url, alt, 300, 300);
    imagesCurrentSection.append(imgCurrent);
    imagesSmallSection.append(img);
  });
  imageBlock.append(imagesSmallSection, imagesCurrentSection);

  return imageBlock;
}
