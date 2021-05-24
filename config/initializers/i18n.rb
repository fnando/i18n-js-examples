# frozen_string_literal: true

require "i18n-js/listen"

I18n.available_locales = %w[pt-BR en]
I18n.default_locale = "en"
I18n.load_path += Dir[Rails.root.join("config/locales/**/*.yml").to_s]

I18nJS.listen

if Rails.env.development?
  I18nJS.call(config_file: Rails.root.join("config/i18n.yml"))
end
