import { notPage } from "../pages/404/404";
import { registrationPage } from "../pages/registration/registrationPage";
import { apiGetProductById } from "../apiRequests/apiGetProductById";
import { createContent } from "../helpers/creators/productCard/createContent";
import { Result } from "../helpers/interfaces/Results";
import { createProductsPage } from "../helpers/creators/createProductsPage";
import { isProductPage } from "../helpers/checks/isProductPage";
import { showProductByUrl } from "../pages/main/content/showProductByUrl";
let isPageGoBack = false;

export const route = (path: string, id?: string): Promise<void> => {
  return new Promise<void>((resolve) => {
    const content = document.getElementById("content") as HTMLElement;

    // eslint-disable-next-line no-unused-vars
    const urlRoutes: { [key: string]: (content: HTMLElement) => void } = {
      404: notPage,
      "": createProductsPage,
      "#registration": registrationPage,
      //"#login": loginPage,
      //"#about": aboutPage,
      //"#profile": profilePage,
    };

    const urlRoute = () => {
      window.addEventListener(
        "popstate",
        () => {
          isPageGoBack = true;
        },
        { once: true },
      );
      if (!isPageGoBack) {
        window.history.pushState({}, "", path);
      }
      isPageGoBack = false;
    };
    if (id) {
      const card = apiGetProductById(id);
      card.then((element) => {
        content.innerHTML = "";
        createContent(content, element as Result);
      });
    } else {
      const location: string = path;
      const origin: string = window.location.origin + "/";

      if (isProductPage(location)) {
        showProductByUrl(window.location.hash.replace("#", ""));
      }
      if (path === window.location.origin) {
        const startPage = urlRoutes[""];
        startPage(content);
      } else {
        const URL = location.replace(origin, "");
        const used = urlRoutes[URL] || urlRoutes[404];
        used(content);
      }
    }
    urlRoute();
    resolve();
  });
};
