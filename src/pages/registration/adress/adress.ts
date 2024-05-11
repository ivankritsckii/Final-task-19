import { createElement } from "../../../helpers/creators/createElement";
import { createInputBlock } from "../../../helpers/creators/createInputBlock";
import { createSelectCountry } from "../../../helpers/creators/createSelectCountry";
const styles = require("./adress.module.scss");

export function addAdressBlock(parent: HTMLElement): void {
  const informBlock = createElement("div", styles.inform);

  const birthBlock = createInputBlock(
    "please select your date of birth",
    "birth",
    "date",
    true,
  );
  const countryBlock = createSelectCountry();
  const cityBlock = createInputBlock(
    "only latin, first letter capitalized, min 3 letters",
    "city",
    "text",
    true,
    "City",
  );
  const postcodeBlock = createInputBlock(
    "min size - 4, numbers or letters",
    "postcode",
    "text",
    true,
    "your postcode",
  );

  const streetBlock = createInputBlock(
    "min size - 4, numbers or letters",
    "street",
    "text",
    true,
    "Street name",
  );

  const buildingBlock = createInputBlock(
    "min size - 4, numbers or letters",
    "building",
    "text",
    true,
    "House name/number",
  );

  const apartmentBlock = createInputBlock(
    "max size - 3, only numbers",
    "apartment",
    "number",
    true,
    "Apartment number",
  );

  informBlock.append(
    countryBlock,
    birthBlock,
    cityBlock,
    postcodeBlock,
    streetBlock,
    buildingBlock,
    apartmentBlock,
  );
  parent.append(informBlock);
}
