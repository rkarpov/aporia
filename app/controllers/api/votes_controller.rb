class Api::VotesController < ApplicationController
    before_action :require_login

    def create 
        votable_type = params[:vote][:votable_type]
        votable_id = params[:vote][:question_id]
        vote = params[:vote][:vote]
        user_id = params[:vote][:user_id]
        @question = Question.find_by(id: votable_id)

        @topicIds = []
        @question.topics.each do |topic|
            @topicIds << topic.id
        end 

        @vote = Vote.find_by(votable_id: votable_id, votable_type: votable_type, user_id: current_user.id)
        if (@vote && (@vote.vote == vote))
            if (vote == 'up')
                @question.vote_count -= 1
                @question.save
                @vote.destroy
                render 'api/questions/show'
            else 
                @question.vote_count += 1
                @question.save
                @vote.destroy
                render 'api/questions/show'
            end
        elsif (@vote && (@vote.vote != vote))
            if (vote == 'up')
                @question.vote_count += 2
                @question.save
                @vote.vote = params[:vote][:vote]
                @vote.save
                render 'api/questions/show'
            elsif (vote == 'down')
                @question.vote_count -= 2
                @question.save
                @vote.vote = params[:vote][:vote]
                @vote.save
                render 'api/questions/show'
            end
        else @vote = Vote.new(votable_id: votable_id, votable_type: votable_type, vote: vote, user_id: user_id)
            if @vote.save
                if @vote.vote == 'up'
                    @question.vote_count += 1
                    @question.save
                elsif @vote.vote == 'down'
                    @question.vote_count -= 1
                    @question.save 
                end
                render 'api/questions/show'
            else
                render json: @vote.errors.full_messages
            end 
        end
    end
end