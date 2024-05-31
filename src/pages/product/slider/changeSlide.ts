export function changeSlide(): void {
  const leftArrow = document.querySelector(".arrow-left") as HTMLElement;
  const rightArrow = document.querySelector(".arrow-right") as HTMLElement;
  const controllers = document.querySelectorAll<HTMLInputElement>(".controller");

  leftArrow.addEventListener("click", () => {
    moveSlide(-1);
  });

  rightArrow.addEventListener("click", () => {
    moveSlide(1);
  });

  controllers.forEach((controller, index) => {
    controller.addEventListener("click", () => {
      moveSlideController(index);
    });
  });
}

function moveSlide(direction: number): void {
  const slides = document.querySelectorAll(".slides");
  const controllers = document.querySelectorAll<HTMLInputElement>(".controller");
  let currentIndex = Array.from(slides).findIndex((slide) => slide.classList.contains("active"));
  slides.forEach((slide) => slide.classList.remove("active"));
  controllers.forEach((controller) => (controller.checked = false));
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
  controllers[currentIndex].checked = true;
}

function moveSlideController(index: number): void {
  const slides = document.querySelectorAll(".slides");
  const controllers = document.querySelectorAll<HTMLInputElement>(".controller");
  slides.forEach((slide) => slide.classList.remove("active"));
  controllers.forEach((controller) => (controller.checked = false));
  slides[index].classList.add("active");
  controllers[index].checked = true;
}
