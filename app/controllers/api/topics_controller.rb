class Api::TopicsController < ApplicationController
    before_action :require_login

    def index
        @topics = Topic.all
        render :index
    end


    def create
        if Topic.find_by(description: params[:topic][:description])
            @topic = (Topic.find_by(description: params[:topic][:description])) 
            if @topic.question_ids.include?(params[:topic][:question_id].to_i)
                render json: ["That topic already exists"], status: 401
            else 
                @joins = QuestionTopic.new({topic_id: @topic.id, question_id: params[:topic][:question_id]})
                @joins.save
                render :show
            end
        else 
            @topic = Topic.new({"description" => params[:topic][:description]})
            if @topic.save
                @joins = QuestionTopic.new({topic_id: @topic.id, question_id: params[:topic][:question_id].to_i})
                @joins.save
                render :show 
            else 
                render json: @topic.errors.full_messages, status: 401
            end
        end
    end



    # def create
    #     @topic = (Topic.find_by(description: params[:topic][:description])) ||
    #              (Topic.new({"description" => params[:topic][:description]}))
    #              
    #     if @topic.questions.length > 0
    #         @topic.questions.each do |question| 
    #             if question.id == params[:topic][:question_id].to_i
    #                 render json: ["That topic already exists"], status: 401
    #                 break
    #             end
    #         end
    #         @joins = QuestionTopic.new({topic_id: @topic.id, question_id: params[:topic][:question_id]})
    #         @joins.save
    #         redirect_to :show
    #     elsif @topic.save
    #         @joins = QuestionTopic.new({topic_id: @topic.id, question_id: params[:topic][:question_id]})
    #         @joins.save
    #         render :show 
    #     else 
    #         render json: @topic.errors.full_messages, status: 401
    #     end
    # end

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
        @question = Question.find(params[:question_id])
        @question_topic = QuestionTopic.find_by(topic_id: @topic.id, question_id: @question.id)
        @question_topic.destroy
        render :show
    end

    def topic_params
        params.require(:topic).permit(:description)
    end

end