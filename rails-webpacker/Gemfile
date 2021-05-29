# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) {|repo| "https://github.com/#{repo}.git" }

ruby "3.0.1"

gem "i18n-js", "~> 4.0.0.alpha1"
gem "listen"
gem "puma"
gem "rails", "~> 6.1.3"
gem "webpacker"

group :development, :test do
  gem "pry-meta"
end

group :development do
  gem "guard"
  gem "guard-compat"
end
