export function createSliderModal(): void {
  const content = document.getElementById("content") as HTMLDivElement;
  const modalWrapper: HTMLDivElement = document.createElement("div");
  modalWrapper.className = "modalWrapper";
  const modalContent: HTMLDivElement = document.createElement("div");
  modalContent.className = "modalContent";

  modalWrapper.append(modalContent);
  content.append(modalWrapper);
}
