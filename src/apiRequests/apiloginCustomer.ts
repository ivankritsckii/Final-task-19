import { createNotification } from "../notification/createNotificationElem";
import { route } from "../router/route";

export const loginUser = async (accessToken: string, email: string, password: string) => {
  const apiHost = "https://api.us-central1.gcp.commercetools.com";
  const projectKey = "rsschool-asdaasd";

  const url = `${apiHost}/${projectKey}/me/login`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  const body = JSON.stringify({
    email: email,
    password: password,
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
    createNotification("success", "Login successful! Welcome back.");
    setTimeout(() => route(""), 3000);
    return result;
  } catch (error) {
    createNotification("error", "Authentication failed. Verify your Email and Password and  try again.");
  }
};
