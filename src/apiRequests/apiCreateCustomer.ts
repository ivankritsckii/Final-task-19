export function apiCreateCustomer(
  emailInput: HTMLInputElement,
  nameInput: HTMLInputElement,
  surnameInput: HTMLInputElement,
  passwordInput: HTMLInputElement,
): void {
  console.log("apiCreateCustomer");
  const email = emailInput.value;
  const name = nameInput.value;
  const surname = surnameInput.value;
  const password = passwordInput.value;
  const token = sessionStorage.getItem("token");
  const tokenType = sessionStorage.getItem("token-type");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `${tokenType} ${token}`);

  const raw = JSON.stringify({
    email: email,
    firstName: name,
    lastName: surname,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as const,
  };

  fetch(
    "https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/customers",
    requestOptions,
  )
    .then((response) => {
      console.log(response);
      if (response.status === 400) {
        console.log("EMAIL");
        const popup = document.querySelector(".popup");
        const popupButton = document.querySelector(
          ".popup__button",
        ) as HTMLButtonElement;
        popup?.classList.add("popup_active");
        popupButton.focus();
      }
      console.log(response.text());
    })
    //.then((result) => console.log(result))
    .catch((error) => {
      console.error("error: ", error);
    });
}
