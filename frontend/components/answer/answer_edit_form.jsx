import React from 'react';

class AnswerEditForm extends React.Component {
    constructor(props){
        super(props)
        
        this.state = this.props.answer
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        
        this.props.requestAnswer(this.props.match.params.answerId)
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.answer.id != this.props.match.params.answerId) {
            this.props.requestAnswer(this.props.match.params.answerId);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }    

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        
        return(
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}> 
                    <label>
                        Edit Post
                    </label>
                    <textarea
                        value={this.state.body}
                        onChange={this.update('body')}    
                    />
                    <input type="submit" value="Edit Answer"/>
                </form>
            </div>


        )
    }
}

export default AnswerEditForm;