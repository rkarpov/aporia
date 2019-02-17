



// import React from 'react';
// import ReactQuill from 'react-quill';
// import { connect } from 'react-redux';
// import Avatar from 'react-avatar';



// class AnswerEditor extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { editorHtml: '', theme: 'snow' };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//         this.modules = {
//             toolbar: [
//                 ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//                 [{ 'list': 'ordered' }, { 'list': 'bullet' },
//                 { 'indent': '-1' }, { 'indent': '+1' }]
//             ]
//         };

//         this.formats = [
//             'bold', 'italic', 'underline', 'strike', 'blockquote',
//             'list', 'bullet', 'indent'
//         ];
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
//                 <ReactQuill
//                     theme={this.state.theme}
//                     onChange={this.handleChange}
//                     value={this.state.editorHtml}
//                     bounds={'.app'}
//                     modules={this.modules}
//                     formats={this.formats}
//                     placeholder="Write your answer"
//                 />
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
