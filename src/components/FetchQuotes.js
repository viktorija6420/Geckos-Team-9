import React from 'react'

class FetchQuotes extends React.Component {
  constructor(props) {
    super(props)
  }
  
  
  render() {
    return (
      <div>
         
        <p>{console.log(this.props.quotes)}</p>
      </div>
    )
  }

  
}

export default FetchQuotes