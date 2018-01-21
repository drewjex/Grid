var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World Yeah Super Cool!
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector("#app"));