import { createNotification } from "../notification/createNotificationElem";
import { loginUser } from "./apiloginCustomer";

export const apiAuthorizeUser = async (email: string, password: string) => {
  const authHost = "https://auth.us-central1.gcp.commercetools.com";
  const projectKey = "rsschool-asdaasd";
  const clientId = "FaK8q3E8G33isxu_Nq_LerOh";
  const clientSecret = "u9mXZFVZZDRvP4i10vNB5zm3FSQJ9uDl";
  // const scope = "manage_customers";

  const url = `${authHost}/oauth/${projectKey}/customers/token`;

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`),
  };

  const body = new URLSearchParams({
    grant_type: "password",
    username: email,
    password: password,
    // scope: scope
  });

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: body,
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
    }
    const result = await response.json();
    sessionStorage.setItem("access_token", result.access_token);
    sessionStorage.setItem("refresh_token", result.refresh_token);
    await loginUser(result.access_token, email, password);
    return result;
  } catch (error) {
    // console.error("Request failed", error);
    createNotification("error", "Authentication failed. Verify your Email and Password and  try again.");
  }
};
