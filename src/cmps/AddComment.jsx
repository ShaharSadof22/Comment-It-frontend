import React, { Component } from 'react'
import { commentService } from '../services/commentService'

export class AddComment extends Component {

    state = {
        email: '',
        message: ''
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.onSubmit(this.state.email, this.state.message)

        this.setState({ email: '' })
        this.setState({ message: '' })
    }

    handleValueChange = (ev) => {
        const text = ev.target.value;
        const name = ev.target.name;
        this.setState({ [name]: text })
    }

    render() {
        return (
            <div className="add-comment">
                <p>AddComment</p>
                <form className="flex column from-wrapper" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Email" name="email" onChange={this.handleValueChange}
                        value={this.state.email} />
                    <textarea name="message" type="text" placeholder="Message" onChange={this.handleValueChange}
                        value={this.state.message} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
