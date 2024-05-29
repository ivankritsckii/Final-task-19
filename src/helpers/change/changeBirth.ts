import { isOlderThan13 } from "../checks/checkBirth";
import { apiChangeBirth } from "../../apiRequests/change/apiChangeBirth";

export async function changeBirth(birth: string): Promise<boolean> {
  const birthPattern = /^(19|20)\d\d[- /.](0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])$/;
  let result = true;
  if (!birthPattern.test(birth)) {
    result = false;
  }

  if (!result) return false;
  if (!isOlderThan13(birth)) return false;

  const customerId = localStorage.getItem("customerId");
  if (!customerId) return false;

  //TODO: добавить уведомление о неверной дате и успешной смене
  await apiChangeBirth(customerId, birth);
  return true;
}
