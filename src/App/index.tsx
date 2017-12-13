import * as React from 'react';
import './App.css';

type Props = {
  name: string
}

class App extends React.Component<Props,{}> {
  render() {
    return (
      <div className="app">
        Well hello there {this.props.name} :)
      </div>
    );
  }
}

export default App;