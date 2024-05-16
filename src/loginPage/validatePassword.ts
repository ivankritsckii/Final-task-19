export const validatePassword = (password: string) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  return {
    isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit,
    errors: {
      messageStart: "Your password should:",
      minLengthError: password.length < minLength ? "Be at least 8 characters long." : "",
      upperCaseError: !hasUpperCase ? "Contain at least one uppercase letter." : "",
      lowerCaseError: !hasLowerCase ? "Contain at least one  lowercase letter." : "",
      digitError: !hasDigit ? "Contain at least one digit." : "",
      specialCharError: hasSpecialChar ? "" : "May contain at least one special character.",
    },
  };
};
