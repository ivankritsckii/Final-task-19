import { createElement } from "../../../helpers/creators/createElement";
import { createLink } from "../../../helpers/creators/createLink";
import { burgerStatus } from "./burgerStatus";
import { clearLocalStorage } from "../../../helpers/clearLocalStorage";
import { route } from "../../../router/route";

export function headerBurger(parrent: HTMLElement): void {
  const burgerButton = createElement("div", "burger-button");
  const nav = createElement("nav", "nav-burger");
  const list = createElement("ul", "nav-burger__list");

  const itemMain = createElement("li", "nav-burger__item");
  const linkMain = createLink("nav-burger__link", "", false);
  itemMain.append(linkMain);
  linkMain.textContent = "Main";
  linkMain.addEventListener("click", (event: Event) => {
    event.preventDefault();
    burgerStatus();
    route(linkMain.href);
  });

  const itemAboutUs = createElement("li", "nav-burger__item");
  const linkAboutUs = createLink("nav-burger__link", "#aboutUs", false);
  itemAboutUs.append(linkAboutUs);
  linkAboutUs.textContent = "About us";
  linkAboutUs.addEventListener("click", (event: Event) => {
    event.preventDefault();
    burgerStatus();
    route(linkAboutUs.href);
  });

  const itemRegistration = createElement("li", "nav-burger__item");
  itemRegistration.classList.add("nav-burger__item_registration");
  const linkRegistration = createLink("nav-burger__link", "#registration", false);
  itemRegistration.append(linkRegistration);
  linkRegistration.textContent = "Registration";
  linkRegistration.addEventListener("click", (event: Event) => {
    event.preventDefault();
    burgerStatus();
    route(linkRegistration.href);
  });

  const itemLogin = createElement("li", "nav-burger__item");
  itemLogin.classList.add("nav-burger__item_login");
  const linkLogin = createLink("nav-burger__link", "#login", false);
  itemLogin.append(linkLogin);
  linkLogin.textContent = "Login";
  linkLogin.addEventListener("click", (event: Event) => {
    event.preventDefault();
    burgerStatus();
    route(linkLogin.href);
  });

  const itemLogout = createElement("li", "nav-burger__item");
  itemLogout.classList.add("nav-burger__item_logout", "nav-burger__item_disable");
  const linkLogout = createLink("nav-burger__link", "#logout", false);
  itemLogout.append(linkLogout);
  linkLogout.textContent = "Logout";
  linkLogout.addEventListener("click", (event: Event) => {
    event.preventDefault();
    burgerStatus();
    clearLocalStorage();
    route(window.location.href);
  });

  burgerButton.addEventListener("click", () => {
    burgerStatus();
  });

  list.append(itemMain, itemAboutUs, itemRegistration, itemLogin, itemLogout);
  nav.append(list);
  parrent.append(burgerButton);
  parrent.append(nav);
}
