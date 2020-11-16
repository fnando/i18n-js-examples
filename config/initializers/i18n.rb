# frozen_string_literal: true

require "i18n-json/listen"

I18n.available_locales = %w[pt-BR en]
I18n.default_locale = "en"
I18n.load_path += Dir[Rails.root.join("config/locales/**/*.yml").to_s]

I18nJSON.listen
