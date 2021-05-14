import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = { message: "" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: "Hello World!, after 5 seconds"
      })
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
      </div>
    )
  }
}

export default App;