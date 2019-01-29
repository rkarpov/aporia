# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Answer.delete_all
Question.delete_all

# first seed file should dispatch action that logsi n the first seed user as demo user

user1 = User.create!(email: "demouser@demo.com", password: 'login1', first_name: "Demo", last_name: "User")
user2 = User.create!(email: "bakerStreetLondon@aol.com", password: 'login1', first_name: "Sherlock", last_name: "Holmes")
user3 = User.create!(email: "catInTheBox@hotmail.com", password: 'login1', first_name: "Shro", last_name: "Dinger")
user4 = User.create!(email: "nyu.com", password: 'login1', first_name: "Ned", last_name: "Block")

question1 = Question.create!(body: "what is consciousness?", author_id: user3.id)
question2 = Question.create!(body: "if elephants have the most neurons, why aren't elephants the smartest animals?", author_id: user2.id)

answer1 = Answer.create!(body: "There are many theories of consciousness, there's no easy answer", author_id: user4.id, question_id: question1.id)
answer2 = Answer.create!(body: "The answer is elementary, dear asker", author_id: user2.id, question_id: question2.id)
answer3 = Answer.create!(body: "Because the elepehant is unable to observe itself", author_id: user3.id, question_id: question1.id)

