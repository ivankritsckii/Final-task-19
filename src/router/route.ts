import { notPage } from "../pages/404/404";
import { registrationPage } from "../pages/registration/registrationPage";
import { apiGetProductById } from "../apiRequests/apiGetProductById";

import { Result } from "../helpers/interfaces/Results";
import { createProductsPage } from "../helpers/creators/createProductsPage";
import { isProductPage } from "../helpers/checks/isProductPage";
import { showProductByUrl } from "../pages/main/content/showProductByUrl";
import { loading } from "../modules/loading/loading";
import { createSingleProductPage } from "../pages/product/createSingleProductPage";
import { createLoginForm } from "../loginPage/createLoginPage";
import { isLogin } from "../loginPage/isLogin";
let isPageGoBack = false;

export const route = (path: string, id?: string): Promise<void> => {
  loading();
  return new Promise<void>((resolve) => {
    const content = document.getElementById("content") as HTMLElement;

    // eslint-disable-next-line no-unused-vars
    const urlRoutes: { [key: string]: (content: HTMLElement) => void } = {
      404: notPage,
      "": createProductsPage,
      "#registration": registrationPage,
      "#login": (content: HTMLElement) => {
        if (isLogin()) {
          window.location.href = window.location.origin;
        } else {
          createLoginForm(content);
        }
      },
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
        createSingleProductPage(element as Result);
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
  }).finally(() => {
    loading();
  });
};
