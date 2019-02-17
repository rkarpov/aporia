import React from 'react';
import { withRouter } from 'react-router-dom';
// import Quil from './quil';
import ReactQuill from 'react-quill';
// import renderHTML from 'react-render-html';
// import 'react-quill/dist/quill.snow.css'


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
        // const answer = Object.assign({}, this.state);
        this.props.action(this.state)
        this.props.toggle()
        // .then(this.setState(this.props.body))
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
                        {/* <div className="current-user-container"> */}
                            <div className="profile-index-container">
                                <p className="avatar-initials" type="text">{initials}</p>
                            </div>
                            <p className="index-username">{username}</p>
                        {/* </div> */}
                    </div>
                    <div className="answer-input-container">
                            {/* <div className="enriched-text"> */}
                        <ReactQuill
                            // className="answer-input-field"
                            // className="answer-input-container"
                            height='500'
                            theme={'snow'}
                            value={this.state.body}
                            bounds={'.app'}
                            modules={this.modules}
                            formats={this.formats}
                            placeholder="Write your answer"
                            // onChange={this.update('body')}
                            onChange={this.handleChange}>
                        </ReactQuill>
                        {/* </div> */}
                    </div>

                                {/* <div> */}
                                {/* </div> */}
                                {/* <div onChange={this.update('body')}> */}
                    <footer className="add-answer-footer">
                        <span className="cancel-answer" onClick={this.props.toggle} type="text">Cancel</span>
                        <button className="add-answer-button" type="submit" >
                            <span>
                                {this.props.formType === 'edit-form' ? "Update" : "Submit"}
                            </span>
                        </button>
                    </footer>
                                
                                {/* </div> */}
                </form>
        )         
    }

}

export default withRouter(AnswerForm);










// class AnswerEditor extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { editorHtml: '', theme: 'snow' };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

        // this.modules = {
        //     toolbar: [
        //         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        //         [{ 'list': 'ordered' }, { 'list': 'bullet' },
        //         { 'indent': '-1' }, { 'indent': '+1' }]
        //     ]
        // };

        // this.formats = [
        //     'bold', 'italic', 'underline', 'strike', 'blockquote',
        //     'list', 'bullet', 'indent'
        // ];
//     }

//     handleChange(html) {
//         this.setState({ editorHtml: html });
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const answer = {
//             body: this.state.editorHtml,
//             question_id: this.props.question.id,
//             user_id: this.props.currentUser.id
//         };
//         this.props.createAnswer(answer);
//         this.props.toggleEditor();
//     }

//     render() {

//         return (
//             <div className="editor question-editor">
//                 <div className="editor-header">
//                 </div>
//                 {/* <ReactQuill
//                     theme={'snow'}
//                     onChange={this.handleChange}
//                     value={this.state.editorHtml}
//                     bounds={'.app'}
//                     modules={this.modules}
//                     formats={this.formats}
//                     placeholder="Write your answer"
//                 /> */}
//                 <div className="editor-actions">
//                     <button className="blue-btn" onClick={this.handleSubmit}>Submit</button>
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     currentUser: state.session.currentUser
// });

// export default connect(mapStateToProps, null)(AnswerEditor);
