const styles = require("./loading.module.scss");
import { createElement } from "../../helpers/creators/createElement";

export function createLoading(parrent: HTMLElement): void {
  const loadingWrapper = createElement("div", styles["loading-wrapper"]);
  const loader = createElement("div", styles.loader);

  loadingWrapper.append(loader);
  parrent.append(loadingWrapper);
}

export function loading(): void {
  const load = document.querySelector(".loading-wrapper");
  load?.classList.toggle(styles["loading-wrapper__active"]);
}
