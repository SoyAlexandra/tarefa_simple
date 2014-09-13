OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['1506463702929369'], ENV['ae9e51700703b04aaa43d12615f16bbb']
end