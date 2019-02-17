import React from 'react';
import { withRouter } from 'react-router-dom';

class TopicForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.topic
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault;
        // this.props.action(this.state)
        this.props.action({ description: this.state.description, question_id: this.props.questionId })
        this.props.requestQuestions();
        this.props.closeModal();
    }

    update(field) {
        return (e) => (
            this.setState({ [field]: e.target.value })
        )
    }

    render() {
        return (
            <div>
                <form className="question-modal" onSubmit={this.handleSubmit}>
                    <div className="question-modal-header-container">
                        <h2 className="question-modal-header">
                            {this.props.formType}
                        </h2>

                        <div className="close-modal-container">
                            <input onClick={() => this.props.closeModal()} className="close" type="submit" value="X" />
                        </div>
                    </div>

                    <div className="question-input-container">
                        <textarea
                            className="question-input-field"
                            onChange={this.update('description')}
                            value={this.state.description}
                            placeholder='Write a topic that best describe the question'
                        />
                    </div>
                    <footer className="question-modal-footer">
                        {/* <div className="cancel-question"> */}
                        < input className="cancel-question" onClick={() => this.props.closeModal()} type="submit" value="Cancel" />
                        {/* </div> */}

                        <div className="add-question-container">
                            <input className="add-question-button" type="submit" value={this.props.formType === 'Edit Topic' ? "Update Topic" : "Add Topic"} />
                        </div>
                    </footer>
                </form>
            </div>
        );
    }
}

export default withRouter(TopicForm);
