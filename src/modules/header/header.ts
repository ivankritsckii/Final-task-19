import { createElement } from "../../helpers/creators/createElement";
import { createLink } from "../../helpers/creators/createLink";
import { route } from "../../router/route";

//TODO: эту фукцию ТОЧНО нужно переписать))
export function createHeader(parrent: HTMLElement) {
  const header = createElement("header", "header");
  const nav = createElement("nav", "nav");
  const ul = createElement("ul", "nav__list");
  const li = createElement("li", "nav__item");
  const link = createLink("nav__link", "#registration", false);
  link.textContent = "registration";
  link.addEventListener("click", (event: Event) => {
    event.preventDefault();
    route(link.href);
  });
  li.append(link);
  ul.append(li);
  nav.append(ul);
  header.append(nav);
  parrent.append(header);
}
