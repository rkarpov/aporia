# json.extract! question, :id, :body, :author_id#, :updated_at

json.body question.body
json.authorFirstName question.author.first_name
json.authorLastName question.author.last_name
json.authorId question.author.id
json.email question.author.email
json.id question.id
json.date question.created_at.strftime("%b %d, %y")
# consider pluck
json.votes question.vote_count

upVoterIds = []
downVoterIds = []
question.votes.each do |vote|
    if vote.votable_type === 'Question' && vote.vote === 'up'
        upVoterIds << vote.user_id
    elsif vote.votable_type === 'Question' && vote.vote === 'down'
        downVoterIds << vote.user_id
    end 
end

json.upVoterIds upVoterIds
json.downVoterIds downVoterIds
    

topicIds = []
question.topics.each do |topic|
topicIds << topic.id 
end 
json.topicIds topicIds

answerAuthorIds = []
question.answers.each do |answer|
    answerAuthorIds << answer.author_id 
end 
json.answerAuthorIds answerAuthorIds
