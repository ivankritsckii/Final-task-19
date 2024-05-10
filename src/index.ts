import { apiInitialization } from "./apiRequests/apiInitialization";
import { createMain } from "./pages/main/createMain";
import { loading } from "./modules/loading/loading";
import { route } from "./router/route";
import { createHeader } from "./modules/header/header";
import { showProductByUrl } from "./pages/main/content/showProductByUrl";
import { isProductPage } from "./helpers/checks/isProductPage";
const styles = require("./pages/style.module.scss");

window.addEventListener("load", async () => {
  window.onhashchange = (event) => {
    loading();
    const change = route(event.newURL);
    change.then(async () => {
      loading();
    });
  };

  const body = document.querySelector("body");
  if (body) {
    body?.classList.add(styles.body);
    const connect = apiInitialization();
    createHeader(body);
    createMain(body);

    connect.then(() => {
      if (isProductPage()) {
        showProductByUrl(window.location.hash.replace("#", ""));
      } else {
        route(window.location.hash);
      }
    });
  }
});
