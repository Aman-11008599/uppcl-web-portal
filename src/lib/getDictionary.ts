type Locale = "en" | "hi";

const dictionaries = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  hi: () => import("@/locales/hi.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

// import en from "../locales/en.json";
// import hi from "../locales/hi.json";

// export type Locale = "en" | "hi";

// const dictionaries = {
//   en,
//   hi,
// };

// export const getDictionary = async (locale: Locale) => {
//   return dictionaries[locale];
// };