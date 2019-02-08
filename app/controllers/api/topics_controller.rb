class Api::TopicsController < ApplicationController
    before_action :require_login

    def index
        @topics = Topic.all
        render :index
    end

    def create
        @topic = Topic.new(topic_params)

        if @topic.save
            render :show 
        else 
            render json: @topic.errors.full_messages, status: 401
        end
    end

    def show
        @topic = Topic.find(params[:id])
        render :show
    end

    def update
        @topic = Topic.find(params[:id])
        if @topic.update_attributes(topic_params)
           render :show 
        else 
            render json: @topic.errors.full_messages, status: 401
        end
    end

    def destroy
        @topic = Topic.find(params[:id])
        if @topic.destroy 
            render :show
        else 
            render json: @topic.errors.full_messages, status: 422
        end
    end

    def topic_params
        params.require(:topic).permit(:description, :question_id)
    end

end