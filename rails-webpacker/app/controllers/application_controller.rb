# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :set_i18n

  private def set_i18n
    locale = params.fetch(:locale, "en")
    I18n.locale = locale if I18n.available_locales.map(&:to_s).include?(locale)
  end
end
