import React from 'react'
import "./app.css"
import CommentList from '../CommentsList/CommentsList'
import CreateComment from '../CreateComment/CreateComment'


const data = [
  {userName: "Karina", comment: "This movie is awesome"},
  {userName: "Artur", comment: "Don't like this film at all"},
  {userName: "Zhanna", comment: "I'm going to watch this movie soon..."},
]
class App extends React.Component {
  state = {
    list: data
  }
  add = (userName, comment) => {
    this.setState({
      list: [
        ...this.state.list, 
       {userName: userName, comment: comment}
      ]
    })
  }
  render() {
    const {list} = this.state
     return(
        <div className={"main-container"}>
          <CommentList data={list}/>
          <CreateComment add={this.add} />
      </div>
  
    )
  }
 
}

export default App


