import { createElement } from "./createElement";
import { createLink } from "./createLink";

export function createNavigationNotPage(): HTMLElement {
  const navigation = createElement("nav", "notPage-navigation");
  const list = createElement("ul", "notPage-list");
  const itemMain = createElement("li", "notPage-item");
  const linkMain = createLink("notPage-link", "", false);
  linkMain.textContent = "Main";
  itemMain.append(linkMain);
  const itemLogin = createElement("li", "notPage-item");
  const linkLogin = createLink("notPage-link", "#login", false);
  linkLogin.textContent = "Login";
  itemLogin.append(linkLogin);
  const itemRegistration = createElement("li", "notPage-item");
  const linkRegistration = createLink("notPage-link", "#registration", false);
  linkRegistration.textContent = "Registration";
  itemRegistration.append(linkRegistration);
  const itemAboutUs = createElement("li", "notPage-item");
  const linkAboutUs = createLink("notPage-link", "#aboutUs", false);
  linkAboutUs.textContent = "About us";
  itemAboutUs.append(linkAboutUs);
  list.append(itemMain, itemLogin, itemRegistration, itemAboutUs);
  navigation.append(list);
  return navigation;
}
