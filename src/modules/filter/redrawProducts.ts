import { apiGetProducts } from "../../apiRequests/apiGetProducts";
import { createContent } from "../../helpers/creators/productCard/createContent";
import { Result } from "../../helpers/interfaces/Results";

export async function redrawProducts() {
  const productsWrapper = document.querySelector(".productsMain") as HTMLDivElement;
  const sorted = document.querySelector(".sortedBy") as HTMLSelectElement;

  productsWrapper.querySelectorAll(".card-link").forEach((element) => element.remove());

  const products = await apiGetProducts();

  if (products) {
    const data = JSON.parse(products as string).results;

    if (sorted.value != "anyway") {
      data.sort((a: Result, b: Result) => {
        const pricesA = a.masterData.current.masterVariant.prices[0];
        const pricesB = b.masterData.current.masterVariant.prices[0];

        const totalPriceA = pricesA.discounted?.value.centAmount || pricesA.value.centAmount;
        const totalPriceB = pricesB.discounted?.value.centAmount || pricesB.value.centAmount;

        return totalPriceA - totalPriceB;
      });
    }
    if (sorted.value === "priceDown") {
      data.reverse();
    }

    data.forEach((element: Result) => {
      const minInput = document.getElementById("min-price") as HTMLInputElement;
      const maxInput = document.getElementById("max-price") as HTMLInputElement;
      const minPrice = Number(minInput.value);
      const maxPrice = Number(maxInput.value);
      const productInCent =
        element.masterData.current.masterVariant.prices[0].discounted?.value.centAmount ||
        element.masterData.current.masterVariant.prices[0].value.centAmount;
      const productPrice = productInCent / 100;

      if (productPrice >= minPrice && productPrice <= maxPrice) {
        if (productsWrapper) {
          createContent(productsWrapper, element);
        }
      }
    });
  }
}
