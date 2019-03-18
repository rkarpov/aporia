import React from 'react';
import { connect } from 'react-redux';
import SearchList from './search_list';
import { requestQuestions } from '../../actions/question_actions';

const msp = state => {
    return {
        questions: Object.values(state.entities.questions)
    }
}

const mdp = dispatch => {
    return ({
        requestQuestions: () => dispatch(requestQuestions())
    })
}

export default connect(msp, mdp)(SearchList);