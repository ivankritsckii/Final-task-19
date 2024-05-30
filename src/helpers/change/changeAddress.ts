import { apiChangeAddress } from "../../apiRequests/change/apiChangeAddress";

export async function changeAddress(addressBlock: HTMLElement): Promise<boolean> {
  const postcodePattern = /^\d{6}$/;
  const apartmentPattern = /^(\d{1,3})$/;
  const adressPattern = /^[a-zA-Z0-9\s]{4,}$/;
  const buildingPattern = /^[a-zA-Z0-9\s]{1,}$/;

  const idAddress = addressBlock.getAttribute("name");
  const city = addressBlock.querySelector("input[name='inform__city']") as HTMLInputElement;
  const postcode = addressBlock.querySelector("input[name='inform__postcode']") as HTMLInputElement;
  const street = addressBlock.querySelector("input[name='inform__street']") as HTMLInputElement;
  const house = addressBlock.querySelector("input[name='inform__house']") as HTMLInputElement;
  const apartment = addressBlock.querySelector("input[name='inform__apartment']") as HTMLInputElement;

  let result = true;
  if (!adressPattern.test(city.value)) {
    console.log("город введен неверно");
    result = false;
  }
  if (!postcodePattern.test(postcode.value)) {
    console.log("postcode введен неверно");
    result = false;
  }
  if (!adressPattern.test(street.value)) {
    console.log("street введен неверно");
    result = false;
  }
  if (!buildingPattern.test(house.value)) {
    console.log("house введен неверно");
    result = false;
  }
  if (!apartmentPattern.test(apartment.value)) {
    console.log("apartment введен неверно");
    result = false;
  }

  if (!result) return false;

  const customerId = localStorage.getItem("customerId");
  if (!customerId) return false;
  if (!idAddress) return false;

  //TODO: добавить уведомление об ошибке(какой?*) и успешной смене адреса
  await apiChangeAddress(customerId, idAddress, city.value, postcode.value, street.value, house.value, apartment.value);
  return true;
}
