import { Result } from "../interfaces/Results";
import { createContent } from "../creators/productCard/createContent";

export function createProductsPage(request: string): void {
  const content = document.querySelector(".content") as HTMLElement;
  const data = JSON.parse(request).results;
  console.log("data", data);
  data.forEach((element: Result) => {
    console.log("element: ", element);
    if (content) {
      createContent(content, element);
    }
  });
}
