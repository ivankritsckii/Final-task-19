import { createNotification } from "../notification/createNotificationElem";
import { loginUser } from "./apiloginCustomer";

export const apiAuthorizeUser = async () => {
  const authHost = "https://auth.us-central1.gcp.commercetools.com";
  const projectKey = "rsschool-asdaasd";
  const clientId = "FaK8q3E8G33isxu_Nq_LerOh";
  const clientSecret = "u9mXZFVZZDRvP4i10vNB5zm3FSQJ9uDl";
  const loginForm = document.querySelector(".login-form") as HTMLFormElement;
  const emailInput = loginForm.querySelector('input[type="email"]') as HTMLInputElement;
  const passwordInput = loginForm.querySelector('input[placeholder="Password"]') as HTMLInputElement;

  const url = `${authHost}/oauth/${projectKey}/customers/token`;

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
  };

  const body = new URLSearchParams({
    grant_type: "password",
    username: emailInput.value,
    password: passwordInput.value,
  });

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: body,
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error: ${response.status} ${response.statusText} - ${errorText} Customer account with the given credentials not found`,
      );
    }
    const result = await response.json();
    localStorage.setItem("access_token", result.access_token);
    localStorage.setItem("refresh_token", result.refresh_token);
    await loginUser(result.access_token, emailInput.value, passwordInput.value);
    return result;
  } catch (error) {
    createNotification("error", "Authentication failed. Verify your Email and Password and  try again.");
  }
};
