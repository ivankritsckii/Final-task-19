import { apiInitialization } from "./apiRequests/apiInitialization";
//import { apiGetProducts } from "./apiRequests/apiGetProducts";
import { createMain } from "./pages/main/createMain";
import { loading } from "./modules/loading/loading";
import { registrationPage } from "./pages/registration/registrationPage";
const styles = require("./pages/style.module.scss");

window.addEventListener("load", async () => {
  const body = document.querySelector("body");
  if (body) {
    body?.classList.add(styles.body);
    const connect = apiInitialization();
    createMain(body);
    loading();
    // show products
    /*
    connect.then(async () => {
      apiGetProducts().then(() => {
        loading();
      });
    });
    */

    // show registration form
    connect.then(async () => {
      const content = document.querySelector(".content") as HTMLElement;
      if (content) {
        registrationPage(content);
      }
      loading();
    });
  }
});
