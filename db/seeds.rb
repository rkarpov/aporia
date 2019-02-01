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

user1 = User.create!(email: "demoUser@demo.com", password: '123456', first_name: "Demo", last_name: "User")
user2 = User.create!(email: "bakerStreetLondon@aol.com", password: 'login1', first_name: "Sherlock", last_name: "Holmes")
user3 = User.create!(email: "catInTheBox@hotmail.com", password: 'login1', first_name: "Shro", last_name: "Dinger")
user4 = User.create!(email: "dummy1@email.com", password: 'login1', first_name: "Ned", last_name: "Block")
user5 = User.create!(email: "dummy2@email.com", password: 'login1', first_name: "Clark", last_name: "Hernandez")
user6 = User.create!(email: "dummy3@email.com", password: 'login1', first_name: "Davis", last_name: "Moore")
user7 = User.create!(email: "dummy4@email.com", password: 'login1', first_name: "Lopez", last_name: "Morgan")
user8 = User.create!(email: "dummy5@email.com", password: 'login1', first_name: "Quinn", last_name: "Cook")
user9 = User.create!(email: "dummy6@email.com", password: 'login1', first_name: "Adams", last_name: "Price")
user10 = User.create!(email: "dumm7y@email.com", password: 'login1', first_name: "Nataly", last_name: "Johnson")
user11 = User.create!(email: "dumm8y@email.com", password: 'login1', first_name: "Susan", last_name: "Wood")
user12 = User.create!(email: "dumm9y@email.com", password: 'login1', first_name: "Elizabeth", last_name: "Flores")
user13 = User.create!(email: "dumm10y@email.com", password: 'login1', first_name: "Trott", last_name: "Torres")
user14 = User.create!(email: "dummy11@email.com", password: 'login1', first_name: "Reily", last_name: "Jackson")
user15 = User.create!(email: "dummy12@email.com", password: 'login1', first_name: "Patel", last_name: "Taylor")
user16 = User.create!(email: "dummy13@email.com", password: 'login1', first_name: "Jones", last_name: "Bennett")
user17 = User.create!(email: "dummy14@email.com", password: 'login1', first_name: "Parmenides", last_name: "Elea")
user18 = User.create!(email: "dummy15@email.com", password: 'login1', first_name: "David", last_name: "Chalmers")

question1 = Question.create!(body: "what is consciousness?", author_id: user3.id)
question2 = Question.create!(body: "Why is there something rather than nothing?", author_id: user9.id)
question3 = Question.create!(body: "Where is the safest place to stand outside in a thunderstorm?", author_id: user3.id)
question4 = Question.create!(body: "What is OK short for?", author_id: user10.id)
question5 = Question.create!(body: "What is a hiccup?", author_id: user3.id)
question6 = Question.create!(body: "Why do I get more car sick in the back?", author_id: user3.id)
# question7 = Question.create!(body: "", author_id: user3.id)
# question8 = Question.create!(body: "", author_id: user3.id)
# question9 = Question.create!(body: "", author_id: user3.id)
# question10 = Question.create!(body: "", author_id: user3.id)
# question11 = Question.create!(body: "", author_id: user3.id)
# question12 = Question.create!(body: "", author_id: user3.id)
# question13 = Question.create!(body: "", author_id: user3.id)
# question14 = Question.create!(body: "", author_id: user3.id)
# question15 = Question.create!(body: "", author_id: user3.id)
# question16 = Question.create!(body: "", author_id: user3.id)
# question17 = Question.create!(body: "", author_id: user3.id)
# question18 = Question.create!(body: "", author_id: user3.id)
# question19 = Question.create!(body: "", author_id: user3.id)

answer1 = Answer.create!(body: "The most fundamental and commonly used notion of the term ‘conscious’ in philosophical circles is captured by Thomas Nagel’s famous “what it is like” sense (Nagel 1974). When I am in a conscious mental state, there is “something it is like” for me to be in that state from the subjective or first-person point of view. When I smell a rose or have a conscious visual experience, there is something it “seems” or “feels like” from my perspective. This is primarily the sense of “conscious state” that is often used by most people. There is also something it is like to be a conscious creature whereas there is nothing it is like to be a table or tree.", author_id: user4.id, question_id: question1.id)
answer2 = Answer.create!(body: "Parmenides maintained that it is self-defeating to say that something does not exist. The linguistic rendering of this insight is the problem of negative existentials: ‘Atlantis does not exist’ is about Atlantis. A statement can be about something only if that something exists. No relation without relata! Therefore, ‘Atlantis does not exist’ cannot be true. Parmenides and his disciples elaborated conceptual difficulties with negation into an incredible metaphysical monolith.", author_id: user17.id, question_id: question2.id)
answer3 = Answer.create!(body: "Tall, pointy objects standing alone in an open space are more likely to get struck by lightning but it’s by no means a certainty. Sometimes the flat ground next to a tall tree can be hit. A car or other enclosed metal structure is the safest place to be in a thunderstorm. Failing that, a ditch, trench or group of shrubs of uniform height is better than nothing. Keep away from boundary areas between dissimilar terrain (water and land; rock and earth; trees and fields). Also keep at least five metres away from metal objects or other people as lightning will often jump from one object to another.", author_id: user16.id, question_id: question3.id)
answer4 = Answer.create!(body: "The most popular theory is that OK comes from ‘oll korrect’, a deliberately misspelled writing of ‘all correct’. It was popularised in Boston newspapers around the 1840s when it was fashionable to go around spelling things incorrectly for humorous effect. Legend also has it that New York Democrats later adopted the abbreviation to promote their candidate Martin Van Buren – the initials ‘OK’ were derived from his nickname, Old Kinderhook.", author_id: user11.id, question_id: question4.id)
answer5 = Answer.create!(body: "A hiccup comes from an involuntary contraction of the diaphragm, producing asudden intake of air. The glottis (the vocal apparatus of the larynx) slams shut at the same time, so that the column of air strikes the closed glottis to produce the characteristic, onomatopoeic noise.", author_id: user5.id, question_id: question5.id)
answer6 = Answer.create!(body: "It's probably because you don't have such a good view of the horizon. Motion sickness occurs when the balance mechanism in your ear registers movement while your eyes are telling you that you are stationary.", author_id: user6.id, question_id: question6.id)
answer7 = Answer.create!(body: "Hide under a box, and stop observing your surrounding. You will be both safe and not safe", author_id: user3.id, question_id: question3.id)
answer8 = Answer.create!(body: " The key question that should be answered by any theory of consciousness is: What makes a mental state a conscious mental state?", author_id: user18.id, question_id: question1.id)
# answer9 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer10 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer11 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer12 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer13 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer14 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer15 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer16 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer17 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer18 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)
# answer19 = Answer.create!(body: "", author_id: user3.id, question_id: question1.id)

