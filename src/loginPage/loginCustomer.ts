import { apiAuthorizeUser } from "../apiRequests/apiAuthCustomer";
import { rememberEmail } from "./rememberCustomer";

export const loginCustomer = () => {
  const loginBtn = document.querySelector(".login-btn-grad") as HTMLButtonElement;
  const loginForm = document.querySelector(".login-form");
  const emailInput = loginForm?.querySelector('input[type="email"]') as HTMLInputElement;
  const passwordInput = loginForm?.querySelector('input[placeholder="Password"]') as HTMLInputElement;

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    apiAuthorizeUser(emailInput.value, passwordInput.value);
    rememberEmail();
  });
};
