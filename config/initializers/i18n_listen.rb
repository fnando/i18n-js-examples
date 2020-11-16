# frozen_string_literal: true

require "i18n-json/listen"

I18nJSON.listen

# Export files right away in development.
if Rails.env.development?
  I18nJSON.call(config_file: Rails.root.join("config/i18n.yml"))
end
