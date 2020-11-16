import { I18n } from "@fnando/i18n";
import translations from "locales.json";

export const i18n = new I18n(translations);
i18n.locale = document.documentElement.lang || "en";
