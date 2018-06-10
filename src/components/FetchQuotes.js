import React from 'react'

class FetchQuotes extends React.Component {
  
  
  
  render(props) {
    return (
      <div>
         
        <p>{console.log(props.quotes)}</p>
      </div>
    )
  }

  
}

export default FetchQuotes