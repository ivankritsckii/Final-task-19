import { apiChangePassword } from "../../apiRequests/change/apiChangePassword";

export async function changePassword(password: string): Promise<boolean> {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const newPasswordInput = document.getElementById("inform__new-password") as HTMLInputElement;
  let result = true;
  if (!passwordPattern.test(password)) {
    //TODO: добавить уведомление, что старый пароль не подходит под паттерн
    console.log("старый пароль не подходит под паттерн");
    result = false;
  }
  if (!passwordPattern.test(newPasswordInput.value)) {
    //TODO: добавить уведомление, что новый пароль не подходит под паттерн
    console.log("новый пароль не подходит под паттерн");
    result = false;
  }

  const customerId = localStorage.getItem("customerId");
  if (!customerId) return false;

  if (!result) return result;
  await apiChangePassword(customerId, password, newPasswordInput.value);
  return result;
}
