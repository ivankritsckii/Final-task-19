import { getTotalCost } from "./getTotalCost";
//import { ShoppingList } from "../../helpers/interfaces/ShoppingList";

export async function createBasketPage() {
  const content = document.querySelector(".content") as HTMLDivElement;
  content.innerHTML = "";
  const totalCostWraper = document.createElement("div");
  totalCostWraper.classList.add("total_cost_wraper");
  const totalCost = await getTotalCost(totalCostWraper);
  console.log(totalCost);
  content.append(totalCostWraper);
}
