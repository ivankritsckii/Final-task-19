export async function getCustomerById(idCustomer: string) {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Basic MG56NkVJV0dYMWxqMlNpeXc4U2FVNHlFOmVXMFRyemo5MHI0QnZlQnpwT1loZ3ZPaVFHQTAyNDRH",
  );

  const raw = "";

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as const,
  };

  try {
    const response = await fetch(
      `https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/customers/${idCustomer}`,
      requestOptions,
    );
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
}
