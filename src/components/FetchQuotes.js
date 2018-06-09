import React from 'react'

class FetchQuotes extends React.Component {
  
  state = {
    quotes: []
  }

  componentDidMount() {
    fetch("https://api.paperquotes.com/apiv1/quotes?tags=love&limit=5", {
      headers: {
        Authorization: "Token e2eeb1aa9f32eb07fa04595a0c457ecb6fadb772"
      }
    })
      .then(response => response.json())
      .then(myJson => this.setState({quotes:myJson.results}));
  }
  
  render() {
    console.log(this.state.quotes)
    return (
      <div>
        hi
      </div>
    )
  }
}

export default FetchQuotes