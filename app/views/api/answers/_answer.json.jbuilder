json.extract! answer, :id, :author_id, :question_id, :body
        json.date answer.created_at.strftime("%b %d, %y")
        json.update answer.updated_at.strftime("%b %d, %y")
        json.authorFirstName answer.author.first_name
        json.authorLastName answer.author.last_name