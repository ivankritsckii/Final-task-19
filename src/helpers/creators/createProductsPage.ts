import { Result } from "../interfaces/Results";
import { apiGetProducts } from "../../apiRequests/apiGetProducts";
import { createContent } from "../creators/productCard/createContent";

export async function createProductsPage(): Promise<void> {
  console.log("CREATE MAIN");
  const content = document.querySelector(".content") as HTMLElement;
  content.innerHTML = "";
  const products = await apiGetProducts();
  if (products) {
    const data = JSON.parse(products as string).results;
    console.log("data", data);
    data.forEach((element: Result) => {
      if (content) {
        createContent(content, element);
      }
    });
  }
}
