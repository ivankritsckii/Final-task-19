import "./notification.scss";
import "@fortawesome/fontawesome-free/js/all.js";

export const createNotification = (type: string, message: string, selector = "body") => {
  const notificationWrapper = document.createElement("div");
  notificationWrapper.className = `notification ${type}`;

  const icon = document.createElement("span");
  icon.className = "notification-icon";
  if (type === "success") {
    icon.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
  } else if (type === "error") {
    icon.innerHTML = '<i class="fa-solid fa-times-circle"></i>';
  } else if (type === "info") {
    icon.innerHTML = '<i class="fa-solid fa-info-circle"></i>';
  } else if (type === "warning") {
    icon.innerHTML = '<i class="fa-solid fa-exclamation-circle"></i>';
  }

  const messageElement = document.createElement("p");
  messageElement.className = "notification-message";
  messageElement.textContent = message;

  notificationWrapper.appendChild(icon);
  notificationWrapper.appendChild(messageElement);

  const targetElement = document.querySelector(selector);
  if (targetElement) {
    targetElement.appendChild(notificationWrapper);
  }

  setTimeout(() => {
    notificationWrapper.classList.add("show");
  }, 10);

  setTimeout(() => {
    notificationWrapper.classList.remove("show");
    setTimeout(() => {
      if (targetElement) {
        targetElement.removeChild(notificationWrapper);
      }
    }, 500);
  }, 5000);
};
