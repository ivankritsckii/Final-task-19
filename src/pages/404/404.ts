//TODO: эту функцию нужно доделать
export function notPage() {
  console.log("NOT PAGE");
  const content = document.getElementById("content");
  if (content) {
    content.innerHTML = "";
    content.textContent = "404 PAGE";
  }
}
