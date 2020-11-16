# i18n.js Rails application sample

This application uses webpacker with [i18n](https://github.com/fnando/i18n) and
[i18n-json](https://github.com/fnando/i18n-json)

Things to check:

- `config/i18n.yml`: i18n-json configuration file. This files states what should
  be exported.
- `config/initializers/i18n.rb` adds code to automatically export translations
  when `config/locales` changes.
- `Gemfile`: adds [listen](https://rubygems.org/gems/listen) and
  [i18n-json](https://github.com/fnando/i18n-json) as dependencies. Notice that
  this app is using `webpacker`.
- `package.json`: adds [@fnando/i18n](https://github.com/fnando/i18n) as
  dependency.
- `app/views/layouts/application.html.erb`: adds default locale using
  `<html lang="<%= I18n.locale %>">`.
- `app/javascript/config/i18n.ts`: initializes i18n-js and loads exported
  translations.
- `app/javascript/locales.json`: exported translations.
- `app/javascript/controllers/hello_controller.ts`: uses `i18n.t` to display a
  translation.
