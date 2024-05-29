import { apiChangeName } from "../../apiRequests/change/apiChangeName";

export async function changeName(name: string): Promise<boolean> {
  const pattern = /^[A-Z][a-zA-Z]{2,}$/;
  let result = true;
  if (!pattern.test(name)) {
    result = false;
  }

  if (!result) return result;

  const customerId = localStorage.getItem("customerId");
  if (!customerId) return false;

  //TODO: добавить уведомление о неверном имени и успешной смене
  await apiChangeName(customerId, name);
  return true;
}
