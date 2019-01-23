class Api::UsersController < ApplicationController

    def index
        @users = User.All
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status:422
        end 
    end 

    def show
        @user = User.find_by(params[:id])
    end

    private 

    def user_params
        params.require(:user).permit(:first_name, :last_name, :password, :email)
    end

end 