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
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
