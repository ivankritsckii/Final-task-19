import { changeImformation } from "../../checks/changeImformation";
import { createElement } from "../createElement";
import { createInput } from "../createInput";
import { activateInput } from "./activateInput";

const styles = require("./profileChange.module.scss");

export function profileChangeBlock(
  typeInput: string,
  nameInput: string,
  contentInput: string,
): HTMLElement {
  const wrapper = createElement("div", styles["profile-inform"]);

  const currentInput = createInput(
    typeInput,
    "profile-inform__input",
    nameInput,
    nameInput,
    false,
  );
  currentInput.value = contentInput;
  currentInput.disabled = true;

  const buttonsBlock = createElement("div", "profile-inform-buttons");

  const editButton = createElement("div", "profile-inform__edit", "edit");
  editButton.addEventListener("click", () => {
    if (editButton.classList.contains("disable_btn")) return;
    activateInput(currentInput);
    saveButton.classList.remove("profile-inform__save_disable");
    editButton.classList.add("disable_btn");
  });
  const saveButton = createElement("div", "profile-inform__save", "save");
  saveButton.classList.add("profile-inform__save_disable");
  saveButton.addEventListener("click", () => {
    if (saveButton.classList.contains("profile-inform__save_disable")) return;
    console.log(currentInput.id);
    activateInput(currentInput);
    changeImformation(currentInput.id);
    saveButton.classList.add("profile-inform__save_disable");
    editButton.classList.remove("disable_btn");
  });

  buttonsBlock.append(editButton, saveButton);

  wrapper.append(currentInput, buttonsBlock);
  return wrapper;
}
