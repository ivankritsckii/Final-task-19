import { createElement } from "../../../helpers/creators/createElement";
const styles = require("./popup.module.scss");

export function emailAlreadyPopup(parent: HTMLElement): void {
  const popup = createElement("div", "popup");
  const popupBody = createElement("div", styles.popup__body);
  const popupHeader = createElement(
    "h2",
    styles.popup__header,
    "There is already an existing customer with the provided email.",
  );
  const popupDescription = createElement(
    "span",
    styles.popup__description,
    "please write another email",
  );
  const buttonClose = document.createElement("button");
  buttonClose.classList.add(styles.popup__button);
  buttonClose.textContent = "ok";
  buttonClose.autofocus = true;

  buttonClose.addEventListener("click", () => {
    popup.classList.remove("popup_active");
  });
  popupBody.append(popupHeader, popupDescription, buttonClose);
  popup.append(popupBody);
  parent.append(popup);
}
