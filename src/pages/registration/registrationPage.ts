import { createRegistrationForm } from "../../helpers/creators/registration/createRegistrationForm";
import { createFormHandlers } from "../../helpers/creators/registration/createFormHandlers";

export function registrationPage(parent: HTMLElement): void {
  createRegistrationForm(parent);
  createFormHandlers();
}
