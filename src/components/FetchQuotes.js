import React from "react";

class FetchQuotes extends React.Component {
  state = {
    quotes: []
  };

  render() {
    const quote1 = this.state.quotes[0] ? this.state.quotes[0].quote : ''
    console.log(quote1)
    return (
      <div>
        <p>hi</p>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://api.paperquotes.com/apiv1/quotes?tags=love&limit=5", {
      headers: {
        Authorization: "Token e2eeb1aa9f32eb07fa04595a0c457ecb6fadb772"
      }
    })
      .then(response => response.json())
      .then(myJson => {
        this.setState({ quotes: myJson.results });
      });
  }
}

export default FetchQuotes;
