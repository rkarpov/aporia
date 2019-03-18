class Api::AnswersController < ApplicationController

    def index
        @answers = Answer.all
        render :index
    end

    def create
        @answer = Answer.new(answer_params)
        if @answer.save
            render :show 
        else 
            render json: @answer.errors.full_messages, status: 401
        end
    end

    def show
        @answer = Answer.find(params[:id])
        render :show
    end

    def update
        @answer = Answer.find(params[:id])
        if @answer.update_attributes(answer_params)
           render :show 
        else 
            render json: @answer.errors.full_messages, status: 401
        end
    end

    def destroy
        @answer = Answer.find(params[:id])
        if @answer.destroy 
            render :show
        else 
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def answer_params
        params.require(:answer).permit(:body, :author_id, :question_id)
    end
end