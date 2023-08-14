import enTranslations from "./en.json";
import esTranslations from "./es.json";
import galTranslations from "./gal.json";

export const languages = {
  en: "English",
  es: "Español",
  gal: "Galego",
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const routes = {
  en: enTranslations,
  es: esTranslations,
  gal: galTranslations,
};
