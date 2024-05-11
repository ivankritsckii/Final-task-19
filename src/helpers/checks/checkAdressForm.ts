export function checkAdressForm(): boolean {
  let result = true;
  const pattern = /^[A-Z][a-zA-Z]{2,}$/;
  const postcodePattern = /^[a-zA-Z0-9]{4,}$/;
  const apartmentPattern = /^(\d{1,3})$/;
  const adressPattern = /^[a-zA-Z0-9\s]{4,}$/;
  const buildingPattern = /^[a-zA-Z0-9\s]{1,}$/;

  const birthInput = document.getElementById("birth") as HTMLInputElement;
  const countrySelect = document.getElementById("country") as HTMLSelectElement;
  const cityInput = document.getElementById("city") as HTMLInputElement;
  const postcodeInput = document.getElementById("postcode") as HTMLInputElement;
  const streetInput = document.getElementById("street") as HTMLInputElement;
  const buildingInput = document.getElementById("building") as HTMLInputElement;
  const apartmentInput = document.getElementById(
    "apartment",
  ) as HTMLInputElement;

  const labelList = document.querySelectorAll(".label-registration");

  if (birthInput.value) {
    labelList[4].classList.remove("label-registration_active");
  } else {
    labelList[4].classList.add("label-registration_active");
    result = false;
  }
  if (!countrySelect.value) {
    result = false;
  }
  if (pattern.test(cityInput.value)) {
    labelList[5].classList.remove("label-registration_active");
  } else {
    labelList[5].classList.add("label-registration_active");
    result = false;
  }
  if (postcodePattern.test(postcodeInput.value)) {
    labelList[6].classList.remove("label-registration_active");
  } else {
    labelList[6].classList.add("label-registration_active");
    result = false;
  }
  if (adressPattern.test(streetInput.value)) {
    labelList[7].classList.remove("label-registration_active");
  } else {
    labelList[7].classList.add("label-registration_active");
    result = false;
  }
  if (buildingPattern.test(buildingInput.value)) {
    labelList[8].classList.remove("label-registration_active");
  } else {
    labelList[8].classList.add("label-registration_active");
    result = false;
  }
  if (apartmentPattern.test(apartmentInput.value)) {
    labelList[9].classList.remove("label-registration_active");
  } else {
    labelList[9].classList.add("label-registration_active");
    result = false;
  }
  return result;
}
