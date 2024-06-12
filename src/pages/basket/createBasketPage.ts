import { getTotalCost } from "./getTotalCost";
import { apiGetDiscountCodes } from "../../apiRequests/shoppingList/apiGetDiscountCodes";
import { useDiscountCodeById } from "../../apiRequests/shoppingList/useDiscountCodeById";
import { emptyBasketPageCreator } from "./emptyBasketPage";
//import { ShoppingList } from "../../helpers/interfaces/ShoppingList";

export async function createBasketPage() {
  const content = document.querySelector(".content") as HTMLDivElement;
  content.innerHTML = "";

  const costAndPromoWraper = document.createElement("div");
  costAndPromoWraper.classList.add("cost_promo_wraper");

  const totalCostWraper = document.createElement("div");
  totalCostWraper.classList.add("total_cost_wraper");
  const isEmptyBasket = await getTotalCost(totalCostWraper);

  const arrayOfCodes = await apiGetDiscountCodes();

  const discountWraper = document.createElement("div");
  discountWraper.classList.add("discont_wraper");
  const discontInput = document.createElement("input");
  discontInput.placeholder = "Input promo code";
  discontInput.classList.add("discont_input");
  const discontBtn = document.createElement("div");
  discontBtn.classList.add("discont_btn");
  discontBtn.classList.add("nav__item");
  discontBtn.innerHTML = "apply code";
  discontBtn.addEventListener("click", async () => {
    if (arrayOfCodes?.includes(discontInput.value)) {
      discontInput.classList.add("true_promo_code");
      discontInput.classList.remove("false_promo_code");
      const discoutnObj = await useDiscountCodeById(discontInput.value);
      await getTotalCost(totalCostWraper, discoutnObj);
      console.log(discoutnObj);
    } else {
      discontInput.classList.remove("true_promo_code");
      discontInput.classList.add("false_promo_code");
    }
  });

  discountWraper.append(discontInput, discontBtn);
  costAndPromoWraper.append(discountWraper, totalCostWraper);
  content.append(costAndPromoWraper);
  if (isEmptyBasket) {
    emptyBasketPageCreator();
  }
}
