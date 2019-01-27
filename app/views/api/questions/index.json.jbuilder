# json.questions do
#     @questions.each do |question|
#         json.set! question.id do 
#             json.partial! "question", question: question 
#         end 
#     end 
# end 

# json.users def 
#     @questions.each do |question|
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