class AuthController < ApplicationController
  def create
    user = User.find_or_create_by(id: params[:id])
    render json: {
      user: UserSerializer.new(user),
      authenticated: true
    }
  end
end