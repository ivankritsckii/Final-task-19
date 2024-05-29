import { checkEmail } from "./checkEmail";

export function changeImformation(idInput: string): void {
  const input = document.getElementById(idInput) as HTMLInputElement;
  //TODO: добавить другие команды к инпутам
  const comands = {
    inform__email: checkEmail(input.value),
    inform__name: "name",
    inform__surname: "surname",
    inform__birth: "birth",
    inform__password: "password",
  } as unknown as { [key: string]: () => boolean };
  console.log(comands[idInput]);
  comands[idInput];
}
