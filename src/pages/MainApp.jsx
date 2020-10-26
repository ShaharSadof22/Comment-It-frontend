import React, { Component } from 'react'
import {AddComment} from '../cmps/AddComment'
import {CommentList} from '../cmps/CommentList'
import { commentService } from '../services/commentService'


export class MainApp extends Component {

    state = {
        comments: []
    }

    async componentDidMount() {
        const comments = await commentService.query()
        this.setState({comments})
    }
    
    onSubmit = async (email, message) => {
        commentService.add(email, message)
        const comments = await commentService.query()
        this.setState({comments})
    }

    render() {
        return (
            <div className="main-app">
               <AddComment onSubmit={this.onSubmit}/>
               <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}
