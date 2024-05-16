export function LogOutBtnRender() {
  const itemRegistration = document.querySelector(".registration__btn");
  const itemLogin = document.querySelector(".logIn__bth");
  const itemLogout = document.querySelector(".logOut__bth");
  if (localStorage.getItem("currentUserID")) {
    itemLogout?.classList.remove("nav__item_disable");
    itemLogin?.classList.add("nav__item_disable");
    itemRegistration?.classList.add("nav__item_disable");
  } else {
    itemLogout?.classList.add("nav__item_disable");
    itemLogin?.classList.remove("nav__item_disable");
    itemRegistration?.classList.remove("nav__item_disable");
  }
}
