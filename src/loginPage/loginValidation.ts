import { isLoginBtnDisabled } from "./isLoginBtnDisabled";
import { validateEmail } from "./validateEmail";
import { validatePassword } from "./validatePassword";

const updateErrorMessage = (
  errorElement: HTMLDivElement,
  validationResult: { isValid: boolean; errors: Record<string, string> },
  defaultMessage: string = "",
) => {
  if (validationResult.isValid) {
    errorElement.textContent = "";
  } else {
    errorElement.innerHTML = defaultMessage ? `<div>${defaultMessage}</div>` : "";
    for (const error in validationResult.errors) {
      errorElement.innerHTML += `<div>${validationResult.errors[error]}</div>`;
    }
  }
};

export const loginFormValidation = (): void => {
  const loginForm = document.querySelector(".login-form");
  const errorMessage = loginForm?.querySelectorAll<HTMLDivElement>(".errorMessage");

  if (loginForm && errorMessage) {
    const emailError = errorMessage[0];
    const passwordError = errorMessage[1];

    loginForm.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      target.value = target.value.trim();

      if (target.type === "email") {
        if (target.value === "") {
          emailError.textContent = "";
        } else {
          updateErrorMessage(emailError, validateEmail(target.value), "Please use the format: <p>user@example.com</p>");
        }
        // errorMessage[0].innerHTML = ` <div>Please use the format <p> user@example.com</p></div>`;
        // const errorObj = validateEmail(target.value) as {
        //   isValid: boolean;
        //   errors: Record<string, string>;
        // };
        // if (errorObj.isValid || target.value == "") {
        //   errorMessage[0].innerHTML = "";
        // } else {
        //   for (const error in errorObj.errors) {
        //     errorMessage[0].innerHTML += `<div>${errorObj.errors[error]}</div>`;
        //   }
        // }
      } else if (target.getAttribute("placeholder") === "Password") {
        if (target.value === "") {
          passwordError.textContent = "";
        } else {
          updateErrorMessage(passwordError, validatePassword(target.value));
        }
        // errorMessage[1].innerHTML = "";
        // const errorObj = validatePassword(target.value) as {
        //   isValid: boolean;
        //   errors: Record<string, string>;
        // };
        // if (errorObj.isValid || target.value == "") {
        //   errorMessage[1].innerHTML = "";
        // } else {
        //   for (const error in errorObj.errors) {
        //     errorMessage[1].innerHTML += `<div>${errorObj.errors[error]}</div>`;
        //   }
        // }
      }
      isLoginBtnDisabled();
    });
  }
};
