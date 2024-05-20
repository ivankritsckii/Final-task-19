import { createElement } from "../../helpers/creators/createElement";
import { createLoading } from "../../modules/loading/loading";
import { emailAlreadyPopup } from "../registration/popup/emailAlreadyPopup";
const styles = require("./content/content.module.scss");

export function createMain(parent: HTMLBodyElement): void {
  const main = createElement("main", styles.main);
  const content = createElement("div", styles.content, "", "content");
  createLoading(main);
  main.append(content);
  parent.append(main);
  emailAlreadyPopup(parent);
}
