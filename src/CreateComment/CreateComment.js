import React, {Component} from 'react'

class CreateComment extends Component {
    state = {
        userName: "",
        comment: ''
    }
    changeValue = (e) => {
        const {value} = e.target
        this.setState({userName:value})
    }
    changeComment = (e) => {
        const {value} = e.target
        this.setState({comment:value})
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state.userName, this.state.comment)

    }
    render(){
    const {value} = this.state;
    const {comment} = this.state;
    return(
           <form className={"form"} onSubmit={(e) => this.onSubmit(e)}>
                <input
                    value={value}
                    onChange = {(e) => this.changeValue(e) }
                    type="text"
                    className="input"
                    placeholder ={"Your name here..."}/>
                <textarea
                    value={comment}
                    onChange = {(e) => this.changeComment(e) }
                    className="textarea"
                    placeholder ={"Your comment here..."}></textarea>
                <button 
                    type="submit"
                    className="button">Add comment
              </button>
           </form>
        )
    }
}

export default CreateComment