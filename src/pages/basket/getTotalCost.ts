import { apiGetShoppingList } from "../../apiRequests/shoppingList/apiGetShoppingList";
import { apiGetProductById } from "../../apiRequests/apiGetProductById";
require("./basketPage.scss");

export async function getTotalCost(wraper: HTMLElement) {
  const list = await apiGetShoppingList();
  let totalCost = 0;
  if (typeof list !== "boolean") {
    list.lineItems.forEach(async (item) => {
      const product = await apiGetProductById(item.productId);
      if (product?.masterData.current.masterVariant.prices[0].discounted) {
        console.log(item.quantity, product?.masterData.current.masterVariant.prices[0].discounted.value.centAmount);
        totalCost += product?.masterData.current.masterVariant.prices[0].discounted.value.centAmount * item.quantity;
      } else if (product) {
        console.log(item.quantity, product?.masterData.current.masterVariant.prices[0].value.centAmount);
        totalCost += product.masterData.current.masterVariant.prices[0].value.centAmount * item.quantity;
      }
      wraper.innerHTML = `The total cost is: ${totalCost / 100} $`;
    });
  }
}
