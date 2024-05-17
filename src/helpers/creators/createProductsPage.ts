import { Result } from "../interfaces/Results";
import { createContent } from "../creators/productCard/createContent";

export function createProductsPage(request: string): void {
  const content = document.querySelector(".content") as HTMLElement;
  const data = JSON.parse(request).results;

  data.forEach((element: Result) => {
    if (content) {
      createContent(content, element);
    }
  });
}
