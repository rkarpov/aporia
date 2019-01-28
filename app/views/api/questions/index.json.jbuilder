json.questions @questions.each do |question|
    json.body question.body
    json.authorFirstName question.author.first_name
    json.authorLastName question.author.last_name
    json.id question.id
end

# refactor to have author object outside the question body but inside the entiteis state
# do so by fetching author id


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