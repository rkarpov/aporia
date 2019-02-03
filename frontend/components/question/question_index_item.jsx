import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CreateAnswerContainer from '../../components/answer/create_answer_container';
import AnswerIndexContainer from '../../components/answer/answer_index_container';
import QuestionEditContainer from './edit_question_container';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, options: false };
        this.toggleDropdown = this.toggleDropdown.bind(this);
        // this.toggleOptions = this.toggleOptions.bind(this);
    };

    toggleDropdown(e) {
        e.preventDefault();
        this.setState({
            dropdown: !this.state.dropdown
        });
    }

    dropdown() {
        //not sure if i need this
        // let initials = ''
        // initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
        // initials = initials.toUpperCase();

        let dropdown;
        if (this.state.dropdown) {
            dropdown =
                <CreateAnswerContainer
                    toggleDropdown={this.toggleDropdown}
                    questionId={this.props.question.id}
                />
        }

        return (
            <div className="dropdown">
                <div className="answer-index-container">
                    <div className="answer-icon-container">
                        <img className="answer-index-svg" onClick={this.toggleDropdown} src={window.answerIcon} />
                    </div>
                    <a className="answer-button" onClick={this.toggleDropdown} type="text">Answer</a>
                </div>
                {dropdown}
            </div>
        );
    }

    // toggleOptions(e) {
    //     e.preventDefault();
    //     this.setState({
    //         options: !this.state.options
    //     })
    // }

    // options() {
    //     let options;
    //     debugger
    //     if (this.state.options) {
    //         options = 
    //             // <div className="navbar-question-container">
    //             //     <button
    //             //         className="navbar-question-modal"
    //             //         onClick={() => this.props.openModal(this.props.formType)}
    //             //     >Edit Question</button>
    //             // </div>
    //         <QuestionEditContainer
    //             toggleOptions={this.toggleOptions}
    //             questionId={this.props.question.id}
    //         />
         
    //     }

    //     return (
    //         <div className="dropdown">
    //             <div className="dropdown-content">
    //                 <div className="options-icon-container">
    //                 content
    //                     {/* <img className="options-icon" onClick={this.toggleOptions} src={window.optionsIcon} /> */}
    //                 </div>
    //             {options}
    //             </div>
    //         </div>
    //     )
    // }

    render(){
        // renders undefined undefined upon creating an answer,
        // unless using similar logic to answerIndexItem
        
        // let authorInitials = ''
        // const names = this.props.author.split(' ')
        // authorInitials += names[0][0] + names[1][0];
        // authorInitials = authorInitials.toUpperCase();

        return (
                <div className="question-index-item-container">
                    <header className="question-index-header-container">
                        <div className="question-index-topics-container">
                            <p className="question-topics">
                                General Topic
                            </p>
                        </div>
                        {/* Question avatar icon & username */}
                        {/* <div className="pleasework">
                            <div className="profile-index-container">
                                <p className="avatar-initials" type="text">
                                    {authorInitials}
                                </p>
                            </div>
                            <p className="authorname">{this.props.author}</p>
                        </div> */}
                    </header>

                    <Link to={`/questions/${this.props.question.id}`} className="question-body">
                            <p className="question-body testing">{this.props.question.body}</p>
                    </Link>
                    {/* <img className="answer-index-svg" src={window.optionsIcon} onClick={this.options} /> */}
                <div className="navbar-question-container">
                    <button
                        className="navbar-question-modal"
                        onClick={() => this.props.openModal({ modal: 'editQuestion', questionId: this.props.question.id })}
                    >Edit Question</button>
                </div>
           
                    <footer hidden={this.props.location.pathname !== "/api/content" ? null : "hidden"} >
                        <div hidden={this.props.formType === 'editQuestion' ? "hidden" : null}>
                            {this.dropdown()}
                            {/* <CreateAnswerContainer
                                questionId={this.props.question.id}
                            /> */}
                        </div>
                        <div >
                            <AnswerIndexContainer 
                                questionId={this.props.question.id}
                            />
                        </div>
                    </footer>
                </div>
        )
    }
}

export default withRouter(QuestionIndexItem);
