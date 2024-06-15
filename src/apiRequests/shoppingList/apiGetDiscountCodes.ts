export async function apiGetDiscountCodes(parent?: HTMLElement) {
  if (parent) {
    parent.innerHTML = "Your promo codes: ";
  }
  const promoCodesArray: string[] = [];
  const myHeaders = new Headers();
  const token = sessionStorage.getItem("token");
  const tokenType = sessionStorage.getItem("token-type");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `${tokenType} ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow" as const,
  };
  try {
    const response = await fetch(
      `https://api.us-central1.gcp.commercetools.com/rsschool-asdaasd/cart-discounts`,
      requestOptions,
    );
    const result = await response.text();
    const json = JSON.parse(result);
    console.log(json);
    json.results.forEach((item: { id: string; isActive: boolean }) => {
      if (!item.isActive) return;
      if (parent) {
        parent.innerHTML += `${item.id}; `;
      }
      promoCodesArray.push(item.id);
    });
    return promoCodesArray;
  } catch (error) {
    console.log(error);
  }
}
