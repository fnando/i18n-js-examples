const i18n = new I18n.I18n();

async function json(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function main() {
  const en = await json("/locales/en.json");
  const ptBR = await json("/locales/pt-BR.json");

  i18n.store(en);
  i18n.store(ptBR);

  const chosenLocale = new URL(location.href).searchParams.get("locale");
  i18n.locale = i18n.translations[chosenLocale] ? chosenLocale : "en";

  document.querySelector("#root").textContent = i18n.t("hello");
}

main();
