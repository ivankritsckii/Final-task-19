import "./login.scss";
import "@fortawesome/fontawesome-free/js/all.js";
import { loginFormValidation } from "./loginValidation";
import { showPassword } from "./showPassword";
import { fillEmail } from "./fillEmail";
// import { route } from "../../router/route";

export const createLoginForm = (selector?: string): void => {
  const forma: HTMLFormElement = document.createElement("form");
  forma.className = "login-form";

  const targetElement: HTMLElement | null = selector
    ? document.querySelector(selector)
    : document.querySelector("body");

  if (targetElement) {
    targetElement.appendChild(forma);
  }

  const loginTitle: HTMLHeadingElement = document.createElement("h2");
  loginTitle.textContent = "Sign in and start shopping";
  forma.appendChild(loginTitle);

  for (let i = 0; i < 2; i++) {
    const inputBox: HTMLDivElement = document.createElement("div");
    inputBox.className = "input-box";
    forma.appendChild(inputBox);
    inputBox.innerHTML +=
      i == 0
        ? '<span><i class="fa-solid fa-envelope"></i> </span>'
        : '<span  class="password-icon"><i class="fa-solid fa-eye-slash"></i></span>';
    const input: HTMLInputElement = document.createElement("input");
    input.setAttribute("type", `${i == 0 ? "email" : "password"}`);
    input.placeholder = `${i == 0 ? "Email" : "Password"}`;
    input.setAttribute("required", "");
    const errorMessage: HTMLDivElement = document.createElement("div");
    errorMessage.className = "errorMessage";
    inputBox.appendChild(input);
    inputBox.appendChild(errorMessage);
  }

  const button: HTMLButtonElement = document.createElement("button");
  button.className = "login-btn-grad";
  button.setAttribute("type", "submit");
  button.textContent = "Login";
  button.disabled = true;

  const rememberCheckbox: HTMLInputElement = document.createElement("input");
  rememberCheckbox.setAttribute("type", "checkbox");
  rememberCheckbox.id = "rememberCheckbox";
  const rememberLabel: HTMLLabelElement = document.createElement("label");
  rememberLabel.textContent = "Remember me";
  rememberLabel.setAttribute("for", "rememberCheckbox");
  forma.appendChild(rememberCheckbox);
  forma.appendChild(rememberLabel);
  forma.appendChild(button);

  const registrationLink: HTMLAnchorElement = document.createElement("a");
  registrationLink.innerHTML = `Don't have an account? <span>Register here! </span>`;
  registrationLink.href = "#registration";
  forma.appendChild(registrationLink);

  showPassword();
  loginFormValidation();
  fillEmail();

  registrationLink.addEventListener("click", (e) => {
    e.preventDefault();
    // route(registrationLink.href);
  });
};
