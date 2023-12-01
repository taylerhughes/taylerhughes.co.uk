import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from "@/utils/constants";

export const priceFormat = (number: number, locale = DEFAULT_LOCALE) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: DEFAULT_CURRENCY,
  })
    .format(number)
    .replace(/(\.|,)00$/g, "");
};

export const calculateDiscountedPrice = (
  price: number,
  discountPercentage: number,
): number => price * (1 - discountPercentage / 100);
