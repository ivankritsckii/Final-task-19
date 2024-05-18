export async function apiCreateCustomer(
  emailInput: HTMLInputElement,
  nameInput: HTMLInputElement,
  surnameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
) {    
  const email = emailInput.value;
  const name = nameInput.value;
  const surname = surnameInput.value;
  const password = passwordInput.value;
  const token = sessionStorage.getItem("token");
  const tokenType = sessionStorage.getItem("token-type");

  const birthInput = document.getElementById("birth") as HTMLInputElement;
  const birth = birthInput.value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `${tokenType} ${token}`);

  const raw = JSON.stringify({
    email: email,
    firstName: name,
    lastName: surname,
    password: password,
    dateOfBirth: birth,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as const,
  };
   try {
    const response = await fetch(
      "https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/customers",
      requestOptions,
    );

    if (response.status === 400) {
      const popup = document.querySelector(".popup");
      const popupButton = document.querySelector(
        ".popup__button",
      ) as HTMLButtonElement;
      popup?.classList.add("popup_active");
      popupButton.focus();
    }
try {
    const response = await fetch(
      "https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/customers",
      requestOptions,
    );
try {
    const response = await fetch(
      "https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/customers",
      requestOptions,
    );
try {
    const response = await fetch(
      "https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/customers",
      requestOptions,
    );
if (response.status === 400) {
      const popup = document.querySelector(".popup");
      const popupButton = document.querySelector(
        ".popup__button",
      ) as HTMLButtonElement;
      popup?.classList.add("popup_active");
      popupButton.focus();
    }

    if (response.status === 201) {
      const result = await response.text();
      const json = JSON.parse(result);
      return json;
    }
  } catch (error) {
    console.error(error);
  }
  
}

