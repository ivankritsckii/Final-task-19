import { createRegistrationForm } from "../../helpers/creators/registration/createRegistrationForm";
import { createFormHandlers } from "../../helpers/creators/registration/createFormHandlers";
import { addWatchFromInput } from "../../helpers/creators/registration/addWatchFromInput";

export function registrationPage(parent: HTMLElement): void {
  createRegistrationForm(parent);
  createFormHandlers();
  addWatchFromInput();
}
