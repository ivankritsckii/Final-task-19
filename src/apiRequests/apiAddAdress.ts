export async function apiAddAdress(
  id: string,
  name: string,
  surname: string,
  email: string,
  country: string,
  city: string,
  street: string,
  postcode: string,
  building: string,
  apartment: string,
) {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `${sessionStorage.getItem("token-type")} ${sessionStorage.getItem("token")}`,
  );

  const raw = JSON.stringify({
    version: 1,
    actions: [
      {
        action: "addAddress",
        address: {
          email: email,
          firstName: name,
          lastName: surname,
          country: country,
          city: city,
          streetName: street,
          postalCode: postcode,
          building: building,
          apartment: apartment,
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow" as const,
  };

  try {
    const response = await fetch(
      `https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/customers/${id}`,
      requestOptions,
    );
    const result = await response.text();
    const json = JSON.parse(result);
    return json;
  } catch (error) {
    console.log(error);
  }
}
