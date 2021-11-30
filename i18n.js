import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './lang/en.json';
import no from './lang/no.json';

const resources = {
  en, no
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;