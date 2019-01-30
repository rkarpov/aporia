class Api::AnswersController < ApplicationController

    def index
        # debugger
        # @answers = Question.find(params[:question_id]).answers # why is question id undefined?! its nested
        # @question = Question.find(params(:question_id))
        @answers = Answer.all
        render json: @answers
    end

# steps = Todo.find(params[:todo_id]).steps
# render json: steps


    def create
        @answer = Answer.new(answer_params)
        # @answer.author_id = current_user.id 
        # @answer.question = params[:question_id]
        # debugger
        if @answer.save
            render :show 
        else 
            render json: @answer.errors.full_messages, status: 401
        end
    end

    def show
        @answer = Answer.find(params[:id])
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
        # @answer.question_id = @answer.question_id
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

# class Api::StepsController < ApplicationController
#   def create
#     step = Step.new(step_params)

#     if step.save
#       render json: step
#     else
#       render json: step.errors.full_messages, status: 422
#     end
#   end

#   def index
#     steps = Todo.find(params[:todo_id]).steps
#     render json: steps
#   end

#   def destroy
#     step = Step.find(params[:id]).destroy
#     render json: step
#   end

#   def update
#     step = Step.find(params[:id])
#     if step
#       step.update(step_params)
#       render json: step
#     else
#       render json: { message: 'not found', status: 404 }
#     end
#   end

#   private
#   def step_params
#     params.require(:step).permit(:title, :done, :body, :todo_id)
#   end
# end