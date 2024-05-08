import { Current } from "./Current";
import { Image } from "./Image";
import { Prices } from "./Prices";
import { Lang } from "./Lang";

export interface Product {
  assets: [];
  attributes: [];
  id: number;
  images: [Image];
  key: string;
  prices: [Prices];
  sku: string;
  metaDescription: Lang;
  metaTitle: Lang;
  name: Lang;
  searchKeywords: object;
  slug: Lang;
  variants: [Product];
  hasStagedChanges: boolean;
  published: boolean;
  staged: Current;
}
