import { apiChangeSurname } from "../../apiRequests/change/apiChangeSurname";

export async function changeSurname(surname: string): Promise<boolean> {
  const pattern = /^[A-Z][a-zA-Z]{2,}$/;
  let result = true;
  if (!pattern.test(surname)) {
    result = false;
  }

  if (!result) return result;

  const customerId = localStorage.getItem("customerId");
  if (!customerId) return false;

  //TODO: добавить уведомление о неверной фамилии и успешной ысмене
  await apiChangeSurname(customerId, surname);
  return true;
}
