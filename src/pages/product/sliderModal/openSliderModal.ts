export function openSliderModal(): void {
  const slide = document.querySelectorAll(".slides");
  const modal = document.querySelector(".modalWrapper") as HTMLElement;

  console.log(modal);
  slide.forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e.target);
      modal.className += " active";
    });
  });
}
