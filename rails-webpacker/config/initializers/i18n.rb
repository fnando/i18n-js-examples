# frozen_string_literal: true

I18n.available_locales = %w[pt-BR en]
I18n.default_locale = "en"
I18n.load_path += Dir[Rails.root.join("config/locales/**/*.yml").to_s]

if Rails.env.development?
  require "i18n-js/listen"

  I18nJS.listen
  I18nJS.call(config_file: Rails.root.join("config/i18n.yml"))
end
