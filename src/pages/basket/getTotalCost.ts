import { apiGetShoppingList } from "../../apiRequests/shoppingList/apiGetShoppingList";
import { apiGetProductById } from "../../apiRequests/apiGetProductById";
require("./basketPage.scss");

export async function getTotalCost(wraper: HTMLElement, discontobj?: { type: string; permyriad: number }) {
  const list = await apiGetShoppingList();
  let totalCost = 0;
  if (typeof list !== "boolean") {
    list.lineItems.forEach(async (item) => {
      const product = await apiGetProductById(item.productId);
      if (product?.masterData.current.masterVariant.prices[0].discounted) {
        totalCost += product?.masterData.current.masterVariant.prices[0].discounted.value.centAmount * item.quantity;
      } else if (product) {
        totalCost += product.masterData.current.masterVariant.prices[0].value.centAmount * item.quantity;
      }

      const costText = document.createElement("span");
      costText.innerHTML = `The total cost is: `;
      const newCost = document.createElement("span");
      newCost.classList.add("valid_total_cost");
      const oldCost = document.createElement("span");
      oldCost.classList.add("invalid_total_cost");

      if (!discontobj) {
        wraper.innerHTML = `The total cost is: ${totalCost / 100} $`;
      } else if (discontobj && discontobj.type === "relative") {
        wraper.innerHTML = "";
        oldCost.innerHTML = `${totalCost / 100} $`;
        newCost.innerHTML = `${((totalCost / 100) * (100 - discontobj.permyriad / 1000)) / 100} $ `;
        wraper.append(costText, newCost, oldCost);
      } else if (discontobj && discontobj.type === "absolute") {
        wraper.innerHTML = "";
        newCost.innerHTML = `${totalCost / 100 - discontobj.permyriad / 1000} $ `;
        oldCost.innerHTML = `${totalCost / 100} $`;
        wraper.append(costText, newCost, oldCost);
      }
    });
  }
}
