import React from 'react'

class FetchQuotes extends React.Component {
  
  
  
  render(props) {
    const newQuoteObject = this.state.quotes[0]
    return (
      <div>
         
        <p>{console.log(props.quotes)}</p>
      </div>
    )
  }

  
}

export default FetchQuotes