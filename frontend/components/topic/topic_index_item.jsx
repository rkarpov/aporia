import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import TopicIndexContainer from './topic_index_container';
class TopicIndexItem extends React.Component {
   
    // doSomething(){
    //     debugger
    //     let topicIdss = []
    //     this.props.topicIds.forEach(topicId => {
    //         debugger
    //         if (this.props.topic.id != topicId) { topicIdss.push(topicId)}
    //     })
    //     this.props.deleteTopic({ topic_id: this.props.topic.id, question_id: this.props.questionId })
        // this.forceUpdate()
        // this.setState(this.state)
        // return (
        // < TopicIndexContainer
        //     sourceType={'fuck'}
        //     topicIds={this.topicIdss}
        //     questionId={this.props.questionId}
        // />  )
        // this.setProps(this.props.sourceType = 'ignore')
        // // this.props.requestTopics();
        // // this.props.fetchQuestion(this.props.questionId)
    // }
 
    render() {
        return(
            <div className={this.props.match.params.description === `${this.props.topic.description}` ? `question-${this.props.sourceType}-topics selected-topic` : `question-${this.props.sourceType}-topics`}>
            {/* link to topic/topic.id url path to index questions that have that topics id*/}
                <Link to={`/api/topics/${this.props.topic.description}`}>
                    { this.props.topic.description } 
                </Link>
                <div hidden={this.props.match.url.includes('question') ? null : "hidden"}>
                <button 
                    className="delete-topic-button"
                    // onClick={() => this.props.deleteTopic(this.props.topic.id)}
                    onClick={() => this.props.deleteTopic({ topic_id: this.props.topic.id, question_id: this.props.questionId })}
                    // onClick={() => this.doSomething()}
                    hidden={this.props.sourceType === 'feedIndex' ? "hidden" : null }    
                    >
                x
                </button>
                </div>
            </div>
        )

    }
}

export default withRouter(TopicIndexItem);