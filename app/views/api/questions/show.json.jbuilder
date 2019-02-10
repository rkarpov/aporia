json.partial! '/api/questions/question', question: @question 

  topicIds = []
  @question.topics.each do |topic|
    topicIds << topic.id 
  end 
  json.topicIds topicIds
# BEFORE
# json.question do
#     json.partial! '/api/questions/question', question: @question 
# end
# above is payload for the (question) below in resulting ajax request. examine it to see what data we get from view

# const receiveQuestion = (question) => {
#     return {
#         type: RECEIVE_QUESTION,
#         question
#     }
# }

# => payload looks like the following..
#         question 
#             {question: {…}}
#             question: {id: 77, body: "question 2", author_id: 35}
#             __proto__: Object

#         reducer merges the question as a key pointing to question object. Reducer fails 
#         to read the actual question. Eventually we call question.id but its called on 
#         a question key with a question object value that has the id. Question.question.id would work
#         but that is a poor ajax state managment

# ? builds inside the url when a GET request has data. This starts a query inside the url. 
# If we get bad data back with ajax request, any get requests associated in the entire chain
#  will result in the ? string in url


# question here is from user input that we manage via forms and props. Either user can give bad info, or other front end issues

# export const createQuestion = (question) => {
#     return $.ajax ({
#         method: `POST`,
#         url: `/api/questions`,
#         data: { question }
#     })
# }