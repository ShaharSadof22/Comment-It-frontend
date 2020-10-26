import React from 'react'

export function CommentPreview({comment}) {
    return (
        <div className="comment-wrapper">
            <p>{comment.email}</p>
            <p className="comment-description">{comment.message}</p>
        </div>
    )
}
