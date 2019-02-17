# Aporia

See the live site at https://aporia-aa.herokuapp.com/#/

## Overview
Aporia is a Greek term denoting a state of perplexity, when one reached an impasse in both discourse and thought. When in a state of aporia, one will likely be left with unanswered questions. Aporia, a Quora clone, is a single-page app that allows users to publically ask and answer questions, which can be searched by topics.

Production and design of this app ranged over the course of roughly three weeks

## Technologies
Aporia was built with the use of Ruby and Ruby on Rails for backend, React and Javascript for frontend, CSS3 for styling, while using a PostgresSQL database. Jbuilder curates data being retrieved from the database into the frontend components. Several components utilize features including click-out handlers, react-quill for rich text editing, and react-render-HTML for parsing HTML tags in the body of text input. Both the question index page and the navbar offer a user the option to ask questions.

## Core Features
### Questions, Answers, Comments
  - Any user can ask and edit questions
  - Any user can answer any question
  - Any user can click on a question and be directed to that question's show page where they can add a comment on any answer
  - Users can edit or delete their own answers and their own comments
### User's Content
  - A user can view any questions that they asked or responded to in their profile
### Question Topics
  - Any user can add relevant topics to any question
  - Users can browse questions by a selected topic
### Unanswered Questions
  - Users can select the 'Answers' tab in the navbar to view unanswered questions
### Rich Text Editor
  - Users can answer questions with the help of a text editing tool
    #### Text editing features
    + text can be bold, underlined, italicized, striked through, indented, bulleted, ordered, and cleaned
    + Users may insert links, images, and videos to supplement informative content when answering questions

## Code Behind the Scenes and encountered Challenges
### Modal
Asking questions utilizes modals. The modal appears at the center of the screen, with a faded background through the help of CSS. Both Open and Close Modal actions are dispatched from relevant containers as props to the respective component that render a form for asking a question. The modal closes whenever the user submits a question or clicks anywhere outside the modal.

### Dropdown
Answering questions, editing answers, and creating or editing comments all utilize dropdowns. Dropsdowns are triggered through toggling options, which are represented by three dots as an svg icon. Whether or not a dropdown or options container is toggled depends on the state of the component. For instance, the state of the relevant component will be ...
```js
this.state = { dropdown: false, options: false };
```
If the state of options is true, a dropdown menu will be toggled for editing a question, answer, or comment, and for removing an answer or comment. Moreover, a click-out handler is incorporated to update the state of options to false, thereby removing the options menu whenever a user clicks outside of the options menu. The click-out handler wraps around the dropdown and listens for relevant click events ... 
```js
const ClickOutHandler = require('react-onclickout');
  <ClickOutHandler onClickOut={() => this.onClickOut()}>
    <div className="dropdown">
        <div className="options-icon-container">
            <img className="options-icon-svg" onClick={this.toggleOptions} src={window.optionsIcon} />
        </div>
        {options}
    </div>
  </ClickOutHandler>
```
However, if the user clicks on the button to edit an answer, a dropdown will render a container for editing their question. 
 ```js
   <button
        className="dropdown-item"
        onClick={this.toggleEdit}
    >Edit Comment</button>
  
    toggleEdit() {
        this.setState({
            dropdown: !this.state.dropdown,
            options: false
        });
    }
```
The function for toggling edit is also passed down to the container, followed by the relevant editing form's component. That function is bound to the index list component, and can be used in the editing form upon handling submit to close the modal, thereby keeping code dry without having to keep track of multiple states across several files.
```js 
comment_index_item.jsx
    if (this.state.dropdown) {
      dropdown =
        <EditCommentContainer
          toggleEdit={this.toggleEdit}
          commentId={this.props.comment.id}
        />
    }
comment_form.jsx
   handleSubmit(e) {
      e.preventDefault();
      this.props.action(this.state)
      if (this.props.pageType === 'Update') {
          this.props.toggleEdit();
      }
    }
```
### Joins Table
A joins table was used to store a has many to has many association between a question and topic. Creating topics was tricky to implement as I needed to use both a question id and a topic id for saving a row in the QuestionTopic joins table. The topic controller's create method receives both the question id and topic description through params. I look up the topic by its description to check whether it already exists, and then whether the question id is included in that topic's list of question id's. A topic with a matching description will not be created a second time, and a topic with a matching question id will not tag the question again. If the topic does not yet exist, then I will save the incoming params under a new topic. Below is a sample of the create method as just described ...
```js
    def create
        if Topic.find_by(description: params[:topic][:description])
            @topic = (Topic.find_by(description: params[:topic][:description])) 
            if @topic.question_ids.include?(params[:topic][:question_id].to_i)
                render json: ["That topic already exists"], status: 401
            else 
                @joins = QuestionTopic.new({topic_id: @topic.id, question_id: params[:topic][:question_id]})
                @joins.save
                render :show
            end
        else 
            @topic = Topic.new({"description" => params[:topic][:description]})
            if @topic.save
                @joins = QuestionTopic.new({topic_id: @topic.id, question_id: params[:topic][:question_id].to_i})
                @joins.save
                render :show 
```
The tricky part was figuring out a way to effectively destroy a question topic, thereby severing the relationship between a question and its corresponding topic, without deleting either the question or topic. The action to remove a topic needed the question and topic id in order to look up the correct question topic by row in the backend. I made the decision to pass down the question id through params from the question show page, which required using a nested route. 
```js 
  resources :questions, only: [:index, :create, :show, :update, :destroy] do 
        resources :topics, only: [:destroy]
      end
```
Nesting routes in this way forced me to design the option to remove topics from a question only when the user is on a question's show page, and nowhere else.

The topic id was easily passed down from its indexed item's id through its props. This provided the topics destroy method with the necessary keys to look up the matching question topic ...
```js
  def destroy
    @topic = Topic.find(params[:id])
    @question = Question.find(params[:question_id])
    @question_topic = QuestionTopic.find_by(topic_id: @topic.id, question_id: @question.id)
    @question_topic.destroy
    render :show
  end
```
Lastly, the payload for removing a topic consisted of two id's, so it was important to call the topic id appropriately in the reducer to update the app's state correctly and have topics be removed in real time
```js
  const removeTopic = (payload) => ({
    type: REMOVE_TOPIC,
    topicId: payload.topic.id
  })
  
  const topicsReducer = ( oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = merge({}, oldState);
    switch (action.type) {
      case REMOVE_TOPIC: 
        delete newState[action.topicId];
        return newState;
    }
  }
```
### Final Remarks
  Future improvements I am looking to implement include ...
    - implement upvotes and downvotes to both questions and answers
    - add successive comments to comments
    - enable users to follow questions
    
Please see the wiki for more information

