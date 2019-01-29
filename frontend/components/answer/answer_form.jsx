import React from 'react';
import { withRouter } from 'react-router-dom';

class AnswerForm extends React.Component {
    constructor(props){
        // debugger
        super(props)
        this.state = this.props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
        // debugger
    }

    handleSubmit(e){
        e.preventDefault();
        
        // const answer = Object.assign({}, this.state);
        this.props.action(this.state)
        // .then(this.setState(this.props.body))
    }

    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render(){

        return(
                <form onSubmit={this.handleSubmit}>
                    <h2>
                        user credentials and profile
                    </h2>
                    <label>
                        enriched text options
                    </label>
                    <div>
                        <textarea
                            onChange={this.update('body')} 
                            value={this.state.body}>
                        </textarea>
                    </div>
                    <footer>
                        <input type="submit" value="Submit"/>
                    </footer>
                </form>
        )
    }

}

export default withRouter(AnswerForm);