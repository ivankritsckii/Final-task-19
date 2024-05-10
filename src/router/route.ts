/* eslint-disable @typescript-eslint/no-explicit-any */
import { notPage } from "../pages/404/404";
import { registrationPage } from "../pages/registration/registrationPage";
import { apiGetProductById } from "../apiRequests/apiGetProductById";
import { createContent } from "../helpers/creators/productCard/createContent";
import { Result } from "../helpers/interfaces/Results";
import { createProductsPage } from "../helpers/creators/createProductsPage";
import { isProductPage } from "../helpers/checks/isProductPage";
import { showProductByUrl } from "../pages/main/content/showProductByUrl";

export const route = (path: string, id?: string): Promise<void> => {
  return new Promise<void>((resolve) => {
    const content = document.getElementById("content") as HTMLElement;

    // eslint-disable-next-line no-unused-vars
    const urlRoutes: { [key: string]: (content: any) => void } = {
      404: notPage,
      "": createProductsPage,
      "#registration": registrationPage,
      //"#login": loginPage,
      //"#about": aboutPage,
      //"#profile": profilePage,
    };

    const urlRoute = () => {
      window.history.pushState({}, "", path);
    };
    if (id) {
      const location: string = window.location.href;
      const adress = sessionStorage.getItem("adress");
      if (adress) {
        console.log(location.replace(adress, ""));
      }
      const card = apiGetProductById(id);
      card.then((element) => {
        content.innerHTML = "";
        createContent(content, element as Result);
      });
    } else {
      const location: string = path;
      const origin: string = window.location.origin + "/";
      if (isProductPage()) {
        showProductByUrl(window.location.hash.replace("#", ""));
      }
      const URL = location.replace(origin, "");
      const used = urlRoutes[URL] || urlRoutes[404];
      used(content);
    }
    urlRoute();
    resolve();
  });
};
