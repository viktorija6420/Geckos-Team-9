import React, { Component } from "react";
import "./App.css";


class App extends Component {
  state = {
    bgURL: ""
  };

  componentDidMount() {
    fetch("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization:
          "Client-ID d870e34414bd653b93aba9430261a7535a80cedede08dca342de5b0424cb6f46"
      }
    })
      .then(result => result.json())
      .then(json => {
        this.setState({ bgURL: json.urls.regular });
      });
  }

  render() {
    const url = this.state.bgURL ? this.state.bgURL : "";

    const divStyle = {
      backgroundImage: `url(${url})`,
      height: "100vh",
      backgroundSize: "cover",
      color: "white"
    };

    return (
      <div className="App">
        <h1 style={divStyle}> here is where the quote will</h1>
      </div>
    );
  }
}

export default App;
