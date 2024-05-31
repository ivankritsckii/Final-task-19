export function createSliderModal(slider: HTMLElement): void {
  const content = document.getElementById("content") as HTMLDivElement;
  const modalWrapper: HTMLDivElement = document.createElement("div");
  modalWrapper.className = "modalWrapper";
  const modalContent: HTMLDivElement = document.createElement("div");
  modalContent.className = "modalContent";

  const closeModal: HTMLButtonElement = document.createElement("button");
  closeModal.className = "close-modal";
  closeModal.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  modalContent.append(closeModal, slider);
  modalWrapper.append(modalContent);
  content.append(modalWrapper);

  closeModal.addEventListener("click", () => {
    console.log("yes");
    modalWrapper.classList.remove("active");
  });
}
