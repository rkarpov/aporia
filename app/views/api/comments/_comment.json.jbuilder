json.extract! comment, :id, :author_id, :answer_id, :body
        json.date comment.created_at.strftime("%b %d, %y")
        json.update comment.updated_at.strftime("%b %d, %y")
        json.authorFirstName comment.author.first_name
        json.authorLastName comment.author.last_name