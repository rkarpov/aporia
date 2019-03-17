class Api::QuestionsController < ApplicationController
    before_action :require_login

    def index
        @questions = Question.all
        render :index
    end

    def create
        @question = Question.new(question_params)
        # @question.author_id = current_user.id 
        if @question.save
            render :show
        else 
            render json: @question.errors.full_messages, status: 422
        end
    end

    def show
        @question = Question.find(params[:id])
        @topicIds = []
        @question.topics.each do |topic|
            @topicIds << topic.id
        end 
        render :show
    end

    def update  
        @question = Question.find(params[:id])
        if @question.update_attributes(question_params)
            @topicIds = []
            @question.topics.each do |topic|
                @topicIds << topic.id
            end 
            render :show
        else 
            render json: @question.errors.full_messages, status: 422
        end
    end
        
    def destroy
        # @question = Question.find(params[:id])    # provide demo user playground to delete anything
        @question = current_user.questions.find(params[:id]) # restrain demo uesers from going crazy
        @topicIds = []
        @question.topics.each do |topic|
            @topicIds << topic.id
        end 
        @question.destroy 
        render :show
    end 

    private
    def question_params
        params.require(:question).permit(:body, :author_id)
    end

end