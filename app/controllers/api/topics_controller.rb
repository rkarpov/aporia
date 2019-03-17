class Api::TopicsController < ApplicationController
    before_action :require_login

    def index
        # select all topics that have at least 1 question id
        # all_topics = Topic.all
        # Topic.find_by_sql("
        #     SELECT *
        #     FROM topics
        #     JOIN questionTopics ON topics WHERE questionTopic.topicId = topic.id
        #     JOIN questions ON questionTopics WHERE questions.topicId = questionTopic.questionId
        #     ")
        @topics = Topic.all
        # @topics = topics.select( |topic| topic.questionIds.length != 0 )
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
                @topic = Topic.find(@joins.topic_id)
                @questions = [Question.find(@joins.question_id)]
                render :new
            end
        else 
            @topic = Topic.new({"description" => params[:topic][:description]})
            
            if @topic.save
                @joins = QuestionTopic.new({topic_id: @topic.id, question_id: params[:topic][:question_id].to_i})
                @joins.save
                @topic = Topic.find(@joins.topic_id)
                @questions = [Question.find(@joins.question_id)]
                render :new
            else 
                render json: @topic.errors.full_messages, status: 401
            end
        end
    end

    def show
        @topic = Topic.find(params[:id])
        @questions = @topic.questions
        render :show
    end

    def destroy
        @topic = Topic.find(params[:id])
        @question = Question.find(params[:question_id])
        @question_topic = QuestionTopic.find_by(topic_id: @topic.id, question_id: @question.id)
        @question_topic.destroy
        # @question.save
        # @question.topics.delete(@topic.id)
        # render :index
        # render 'api/questions/show'
        # render :show
        render :destroy
    end

    def topic_params
        params.require(:topic).permit(:description)
    end

end