import React  from "react";
import Routes from "./router/Routes";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes {...this.props} />
      </div>
    );
  }
}

export default App;
