import { apiChangeEmail } from "../../apiRequests/change/apiChangeEmail";

export async function checkEmail(email: string): Promise<boolean> {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let result = true;
  if (!emailPattern.test(email)) {
    result = false;
  }

  if (!result) return result;

  const customerId = localStorage.getItem("customerId");
  if (!customerId) return false;

  const newEmail = await apiChangeEmail(customerId, email);
  //TODO: добавить уведомление об занятом email
  if (newEmail.statusCode === 400) {
    console.log("такой email занят");
  }
  return true;
}
