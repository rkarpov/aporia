import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const msp = (state, ownProps) => {

    return ({
        comment: {
            body: "",
            author_id: state.session.id,
            answer_id: ownProps.answerId,
        },
        pageType: 'Submit Comment',
        currentUser: state.entities.users[state.session.id],
        toggle: ownProps.toggleDropdown
    })
}

const mdp = dispatch => {
    return ({
        action: (answer) => dispatch(createComment(answer)),
    })
}

export default connect(msp, mdp)(CommentForm);