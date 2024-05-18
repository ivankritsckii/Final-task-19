import { headerBurger } from "./headerBurger/headerBurger";
import { createElement } from "../../helpers/creators/createElement";
import { createLink } from "../../helpers/creators/createLink";
import { route } from "../../router/route";
const styles = require("./header.module.scss");

export function createHeader(parrent: HTMLElement): void {
  const header = createElement("header", styles.header);
  const nav = createElement("nav", "nav");
  const list = createElement("ul", "nav__list");

  const itemMain = createElement("li", "nav__item");
  const linkMain = createLink("nav__link", "", false);
  itemMain.append(linkMain);
  linkMain.textContent = "Main";
  linkMain.addEventListener("click", (event: Event) => {
    event.preventDefault();
    route(linkMain.href);
  });

  const itemAboutUs = createElement("li", "nav__item");
  const linkAboutUs = createLink("nav__link", "#aboutUs", false);
  itemAboutUs.append(linkAboutUs);
  linkAboutUs.textContent = "About us";
  linkAboutUs.addEventListener("click", (event: Event) => {
    event.preventDefault();
    route(linkAboutUs.href);
  });

  const itemRegistration = createElement("li", "nav__item");
  const linkRegistration = createLink("nav__link", "#registration", false);
  itemRegistration.append(linkRegistration);
  linkRegistration.textContent = "Registration";
  linkRegistration.addEventListener("click", (event: Event) => {
    event.preventDefault();
    route(linkRegistration.href);
  });

  const itemLogin = createElement("li", "nav__item");
  const linkLogin = createLink("nav__link", "#login", false);
  itemLogin.append(linkLogin);
  linkLogin.textContent = "Login";
  linkLogin.addEventListener("click", (event: Event) => {
    event.preventDefault();
    route(linkLogin.href);
  });

  const itemLogout = createElement("li", "nav__item");
  itemLogout.classList.add("nav__item_disable");
  const linkLogout = createLink("nav__link", "#logout", false);
  itemLogout.append(linkLogout);
  linkLogout.textContent = "Logout";
  linkLogout.addEventListener("click", (event: Event) => {
    event.preventDefault();
    route(linkLogout.href);
  });

  list.append(itemMain, itemAboutUs, itemRegistration, itemLogin, itemLogout);
  nav.append(list);
  header.append(nav);
  parrent.append(header);
  headerBurger(header);
}
