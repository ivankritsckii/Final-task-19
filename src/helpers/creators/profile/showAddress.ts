export function showAddress(): void {
  const select = document.getElementById("select-address") as HTMLSelectElement;
  const addresses = document.querySelectorAll(".profile-inform_address");

  addresses.forEach((element) => {
    element.classList.add("profile-inform_disable");
  });

  addresses[Number(select.value) - 1].classList.remove("profile-inform_disable");
}
