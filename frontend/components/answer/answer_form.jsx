import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

class AnswerForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.modules = {
            toolbar: [
                [{ font: [] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['clean'], [], [],
                ['link', 'image', 'video']
            ]
        };

        this.formats = [
            'font',
            'bold', 'italic', 'underline', 'strike',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
        ];
    }

    handleSubmit(e){
        e.preventDefault();      
        this.props.action(this.state)
        this.props.toggle()
    }

    handleChange(e){
        this.setState({ body: e })
    }

    render(){
        let initials = ''
        let username;
        if (this.props.currentUser) {
            username = (this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name);
            initials += this.props.currentUser.first_name[0] + this.props.currentUser.last_name[0];
            initials = initials.toUpperCase();
        }

        return(
                <form className="answer-form" onSubmit={this.handleSubmit}>
                    <div className="add-answer-header-container">
                        <div className="profile-index-container">
                            <p className="avatar-initials" type="text">{initials}</p>
                        </div>
                        <p className="index-username">{username}</p>
                    </div>

                    <div className="answer-input-container">
                        <ReactQuill
                            height='500'
                            theme={'snow'}
                            value={this.state.body}
                            bounds={'.app'}
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="Write your answer"
                            onChange={this.handleChange}>
                        </ReactQuill>
                    </div>
                    
                    <footer className="add-answer-footer">
                        <span className="cancel-answer" onClick={this.props.toggle} type="text">Cancel</span>
                        <button className="add-answer-button" type="submit" >
                            <span>
                                {this.props.formType === 'edit-form' ? "Update" : "Submit"}
                            </span>
                        </button>
                    </footer>
                </form>
        )         
    }

}

export default withRouter(AnswerForm);