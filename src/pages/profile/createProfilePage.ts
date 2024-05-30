import { profileChangeBlock } from "../../helpers/creators/profile/profileChangeBlock";
import { profileChangeAddress } from "../../helpers/creators/profile/profileChangeAddress";
import { getCustomerById } from "../../apiRequests/getCustomerById";
import { createElement } from "../../helpers/creators/createElement";
import { Address } from "../../helpers/interfaces/Address";
import { passwordWrapper } from "../../helpers/creators/profile/passwordWrapper";

export async function createProfilePage() {
  const content = document.querySelector(".content") as HTMLDivElement;
  content.innerHTML = "";

  const profileWrapper = createElement("div", "profile");

  const customerId = localStorage.getItem("customerId");
  if (!customerId) return;
  const customer = await getCustomerById(customerId);
  console.log(customer);

  const emailBlock = profileChangeBlock("email", "inform__email", customer.email);

  const nameBlock = profileChangeBlock("text", "inform__name", customer.firstName);
  const surnameBlock = profileChangeBlock("text", "inform__lastName", customer.lastName);
  const birthBlock = profileChangeBlock("date", "inform__birth", customer.dateOfBirth);

  const passportBlock = passwordWrapper();

  profileWrapper.append(emailBlock, nameBlock, surnameBlock, birthBlock, passportBlock);
  content.append(profileWrapper);

  const allAdresses = customer.addresses;
  const shippingAddresses = customer.shippingAddressIds;
  const billingAddresses = customer.billingAddressIds;

  allAdresses.forEach((element: Address) => {
    let shippingAddress;
    let billingAddress;
    if (shippingAddresses.includes(element.id)) {
      shippingAddress = profileChangeAddress(
        element.id,
        "profile-inform_shippingAddress",
        element.city,
        element.postalCode,
        element.streetName,
        element.building,
        element.apartment,
      );
      if (element.id === customer.defaultShippingAddressId) {
        const defaulthShipping = createElement("div", "isDefaulth", "this is the default shipping address");
        defaulthShipping.classList.add("isDefaulth_Shipping");
        shippingAddress.prepend(defaulthShipping);
      }
    }
    if (billingAddresses.includes(element.id)) {
      billingAddress = profileChangeAddress(
        element.id,
        "profile-inform_billingAddress",
        element.city,
        element.postalCode,
        element.streetName,
        element.building,
        element.apartment,
      );
      if (element.id === customer.defaultBillingAddressId) {
        const defaulthBilling = createElement("div", "isDefaulth", "this is the default billing address");
        defaulthBilling.classList.add("isDefaulth_Billing");
        billingAddress.prepend(defaulthBilling);
      }
    }

    if (shippingAddress) profileWrapper.append(shippingAddress);
    if (billingAddress) profileWrapper.append(billingAddress);
  });
}
