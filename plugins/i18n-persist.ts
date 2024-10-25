import { defineNuxtPlugin, type RuntimeNuxtHooks } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      (nuxtApp as any).$i18n.locale = savedLocale;
    }
  }

  nuxtApp.hook(
    "i18n:localeChanged" as keyof RuntimeNuxtHooks,
    (newLocale: string) => {
      localStorage.setItem("locale", newLocale);
    }
  );
});
