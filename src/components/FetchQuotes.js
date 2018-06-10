import React from 'react'

class FetchQuotes extends React.Component {

  state = {
    quotes: []
  }
  
  render() {
    const newQuoteObject = this.state.quotes[0] ? this.state.quotes[0] : ""
    return (
      <div>
        
        <p>{newQuoteObject}</p>
      </div>
    )
  }
 
  componentDidMount() {
    fetch("https://api.paperquotes.com/apiv1/quotes?tags=love&limit=5", {
      headers: {
        Authorization: "Token e2eeb1aa9f32eb07fa04595a0c457ecb6fadb772"
      }
    })
      .then(response => response.json())
      .then(myJson => {
 const quotes = myJson.results.map(obj => obj.quote)
 this.setState({quotes})
 }
 );
  }
 
 

  
}

export default FetchQuotes