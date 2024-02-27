class ApplicationController < ActionController::Base
  USER_ID = 154848467

  def authenticate
    payload = {"user"=>{"providers"=>{"getting.out"=>USER_ID}}}
    @auth_token = JWT.encode payload, Rails.application.credentials.jwt_secret, 'HS512'
  end
end
