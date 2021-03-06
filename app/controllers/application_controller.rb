class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up){|u| u.permit(:name, :location, :description, :email, :password) }
  end


  def after_sign_in_path_for(resource)
    questions_path
  end

  def validate_admin
    #si el  user no  es admin ? redireccione a index
  end

end
