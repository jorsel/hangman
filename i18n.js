import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './lang/en.json';
import no from './lang/no.json';

export const resources = {
  en, no
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    fallbackLng:'en',
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;