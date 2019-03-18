import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {

    render() {
        const commentItems = this.props.comments.map(comment => {
            return (
                <CommentIndexItem
                    key={`comment-${comment.id}`}
                    comment={comment}
                    deleteComment={this.props.deleteComment}
                    currentUser={this.props.currentUser}
                />
            )
        })

        return (
            <div>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    };
}

export default CommentIndex;