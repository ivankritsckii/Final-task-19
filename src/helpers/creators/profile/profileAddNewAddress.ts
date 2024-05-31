import { createElement } from "../createElement";
import { profileChangeAddress } from "./profileChangeAddress";
import { showAddress } from "./showAddress";
import { AddShippingAddressId } from "../../../apiRequests/addAddress/AddShippingAddressId";
import { apiAddAdress } from "../../../apiRequests/apiAddAdress";
export function AddNewAddres(
  parent: HTMLElement,
  addressParent: HTMLElement,
  countAddresses: number,
  clientId: string,
) {
  const addShippingAddres = createElement("div", "shipping-address__add", "Add Shiping Addres");
  addShippingAddres.classList.add("profile-inform-address__edit");
  const addBillingAddres = createElement("div", "billing-address__add", "Add Billing Addres");
  addBillingAddres.classList.add("profile-inform-address__edit");

  parent.append(addShippingAddres, addBillingAddres);

  const select = document.getElementById("select-address") as HTMLSelectElement;
  addShippingAddres.addEventListener("click", () => {
    const newShippindAddres = profileChangeAddress(
      "",
      "profile-inform_shippingAddress",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    );
    console.log(newShippindAddres);
    const addressOption = createElement(
      "option",
      "option-address",
      `Address - ${String(countAddresses)}`,
    ) as HTMLOptionElement;
    addressOption.value = String(countAddresses);
    countAddresses++;
    select.append(addressOption);
    addressParent.append(newShippindAddres);
    const saveBtns = addressParent.querySelectorAll(".profile-inform__save");
    //console.log(saveBtns[countAddresses - 2]);
    saveBtns[countAddresses - 2]?.addEventListener("click", async () => {
      const address = await apiAddAdress(clientId, streetInput.value, buildingInput.value, apartmentInput.value);
      await AddShippingAddressId(clientId, address.addresses[0].id);
      console.log("save!!!!");
    });
    showAddress();
  });
}
//profile-inform__save
