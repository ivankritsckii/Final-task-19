import { watchPressing } from "../../watchPressing";

export function addWatchFromInput(): void {
  const streetShipping = document.getElementById("street") as HTMLInputElement;
  const houseShipping = document.getElementById("building") as HTMLInputElement;
  const apartShipping = document.getElementById(
    "apartment",
  ) as HTMLInputElement;

  const streenBilling = document.getElementById(
    "street-billing",
  ) as HTMLInputElement;
  const houseBilling = document.getElementById(
    "building-billing",
  ) as HTMLInputElement;
  const apartBilling = document.getElementById(
    "apartment-billing",
  ) as HTMLInputElement;

  streetShipping.addEventListener("keydown", () => {
    watchPressing(streetShipping, streenBilling);
  });
  houseShipping.addEventListener("keydown", () => {
    watchPressing(houseShipping, houseBilling);
  });
  apartShipping.addEventListener("keydown", () => {
    watchPressing(apartShipping, apartBilling);
  });

  streenBilling.addEventListener("keydown", () => {
    watchPressing(streenBilling, streetShipping);
  });
  houseBilling.addEventListener("keydown", () => {
    watchPressing(houseBilling, houseShipping);
  });
  apartBilling.addEventListener("keydown", () => {
    watchPressing(apartBilling, apartShipping);
  });
}
