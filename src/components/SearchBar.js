import React from "react";

export default class SeachBar extends React.Component {
  state = {
    term: []
  };

 handleUserInput = (term) => {
     const userInput =(term)
    this.setState((prevState)=>({
      term: term
    }))
    this.props.onVideoChange(term)
 }
  render() {
    return (
      <div>
        <input 
        value={this.state.term}
        type="text" onChange={ (e)=> this.handleUserInput(e.target.value) }/>
      </div>
    );
  }
}
