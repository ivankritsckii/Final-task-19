export function changeActiveImage(target: HTMLElement): void {
  const wrapper = document.querySelector(".images-small") as HTMLDivElement;
  const images = document.querySelectorAll(".image");
  const imagesCurrent = document.querySelectorAll(".image-current");
  const activeImg = document.querySelector(".image__active") as HTMLImageElement;
  const activeImgCurrent = document.querySelector(".image-current__active") as HTMLImageElement;

  if (target === activeImg || target === wrapper) {
    return;
  }

  for (let i = 0; i <= images.length; i++) {
    if (images[i] === target) {
      activeImg.classList.remove("image__active");
      activeImgCurrent.classList.remove("image-current__active");

      images[i].classList.add("image__active");
      imagesCurrent[i].classList.add("image-current__active");
    }
  }
}
