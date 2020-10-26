import React from 'react'
import { CommentPreview } from './CommentPreview'

export function CommentList({ comments }) {
    return (
        <div className="comment-list">
            {comments.length > 0 &&
                comments.map(comment => <CommentPreview comment={comment} key={comment._id}/>)
            }
        </div>
    )
}

