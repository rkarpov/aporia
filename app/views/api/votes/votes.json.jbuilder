# json.set! @votable.class.name.downcase do
#   json.set! @votable.id do
#     json.score @votable.score

#     if current_user
#       current_user_vote = @votable.votes.find_by(voter_id: current_user.id)
#       json.currentUserVote current_user_vote ? current_user_vote.vote_type : "none"
#     end
#   end
# end

# debugger
    # json.body question.body
    # json.authorFirstName question.author.first_name
    # json.authorLastName question.author.last_name
    # json.authorId question.author.id
    # json.email question.author.email
    # json.id question.id
    # json.date question.created_at.strftime("%b %d, %y")
    # json.answerIds []
    # json.answerAuthorIds []
    # json.topicIds [] # look up pluck method

    # ({[oldState[312].votes]: action.vote.votes})
    json.vote do 
        # json.questionVotes @question.votes
        json.questionId @question.id
        json.votes @question.vote_count
    end 