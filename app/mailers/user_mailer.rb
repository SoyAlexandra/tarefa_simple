class UserMailer < ActionMailer::Base
  default from: "tarefasimple@gmail.com"

  def welcome_email(user)
    @user = user
    @url  = 'http://www.tarefasimple.com/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end

end
