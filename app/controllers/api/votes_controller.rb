class Api::VotesController < ApplicationController
    before_action :require_login

    def create 
        
        votable_type = params[:vote][:votable_type]
        votable_id = params[:vote][:question_id]
        vote = params[:vote][:vote]
        user_id = params[:vote][:user_id]

        # @vote = Vote.new(votable_type, votable_id, vote, user_id)
        @question = Question.find_by(id: votable_id) # @vote.votable == @question || Question[:votable_id]

        # @vote = Vote.find_by([:vote][:votable_type], [:vote][:votable_id], [:vote][:vote], [:vote][:user_id])
        # @vote = Vote.find_by(user_id: "333", votable_id: 292, votable_type: "Question", vote: "up")
        @vote = Vote.find_by(user_id: user_id, votable_id: votable_id, votable_type: votable_type, vote: vote)
        # @vote = Vote.find_by(votable_id: votable_id, votable_type: votable_type)
        # @vote = Vote.find_by(votable_id: "312", votable_type: "Question", vote: "up", user_id: 333)
        
        #  Vote.find_by(user_id: user_id.to_i, votable_id: votable_id.to_i, votable_type: "Question", vote: "up")
        debugger
        # if an existing vote is already found, and it is an upvote, and the user clicked upvote again, then destroy the vote and reduce question's vote count
        if (@vote && (@vote.vote == vote))
            # debugger
            if (vote == 'up')
                @question.vote_count -= 1 # @question.update(vote_count: @question.vote_count -= 1)
                @question.save
                # debugger
                render :votes
            else 
                @question.vote_count += 1
                @question.save
                render :votes
            end
            @vote.destroy
    # if an existing vote is already found, and it is an upvote, and the user clicked downvote, then...
    #  either destroy it and create an upvote, or assign the vote to opposite value and handle Question's vote_count
        elsif (@vote && (@vote.vote != vote))
            if (vote == 'up')
                @question.vote_count -= 2
                @question.save
                @vote.vote = params[:vote][:vote_type]
                @vote.save
            else
                @question.vote_count += 2
                @question.save
                @vote.vote = params[:vote][:vote_type]
                @vote.save
            end
        else @vote = Vote.new(votable_id: votable_id, votable_type: votable_type, vote: vote, user_id: user_id)
        # else @vote = Vote.new(vote_params)
            # debugger
            if @vote.save
                # debugger
                if @vote.vote == 'up'
                    @question.vote_count += 1
                    @question.save
                elsif @vote.vote == 'down'
                    @question.vote_count -= 1
                    @question.save 
                end
                render :votes
            else
                render json: @vote.errors.full_messages
            end 
        end
    end

    # def destroy

    # end

    # def vote_params
    #     params.require(:vote).permit(:user_id, :votable_id, :votable_type, :vote)
    # end
end