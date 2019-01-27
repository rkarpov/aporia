import React from 'react';
import { withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.question
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.action(this.state);
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
                            Add Question
                        </h2>

                        <div className="close-modal-container">
                            <input onClick={() => this.props.closeModal()} className="close" type="submit" value="X"/>
                        </div>
                    </div>

                    <div className="question-input-container">
                        <input
                            className="question-input-field"
                            type="text" onChange={this.update('body')}
                            value={this.state.body}
                            placeholder='Start your question with "What", "How", "Why", etc.'
                        />
                    </div>
                    <footer className="question-modal-footer">
                    {/* <div className="cancel-question"> */}
                        <input onClick={() => this.props.closeModal()}type="submit" value="Cancel"/>
                    {/* </div> */}

                    {/* <div className="add-question-button"> */}
                        <input type="submit" value="Add Question" />
                    </footer>
                </form>
            </div>
        );
    }
}

export default withRouter(QuestionForm);
