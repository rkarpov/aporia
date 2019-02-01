@questions.each do |question|
    # json.body question.body
    # json.authorFirstName question.author.first_name
    # json.authorLastName question.author.last_name
    # json.authorId question.author.id
    # json.email question.author.email
    # json.id question.id
    # json.date question.created_at.strftime("%b %d, %y")
      json.set! question.id do 
        json.partial! '/api/questions/question', question: question 
      end
end

# refactor to have author object outside the question body but inside the entiteis state
# do so by fetching author id

# json.questions @questions.each do |question|
#     json.body question.body 
#     json.authorId question.author.id
# end

# json.users do
#   @questions.each do |question|
#     author = question.author
#     json.set! author.id do
#       json.extract! author, :id, :first_name, :last_name
#     end
#   end
# end




# json.questions do
#     @questions.each do |question|
#         json.set! question.id do 
#             json.partial! "question", question: question 
#         end 
#     end 
# end 

# json.users def 
# json.questions @questions.each do |question|
#         json.set! question.author do
#             json.extract! user, :id, :first_name, :last_name
#         end
#     end 
# end

    #  1: {
    #     id: 1,
    #     title: "what is consciousness?",
    #     authorId: 11,
    #     upvoteIds: [11, 42]
    #   },