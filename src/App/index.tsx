import * as React from 'react';
import styled from "react-emotion";

const Card = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  color: '#0c0c0c'
});


type Props = {
  name: string
}

class App extends React.Component<Props, {}> {
  render() {
    return (
      <Card data-testid="app">
        Well hello there {this.props.name} :)
      </Card>
    );
  }
}

export default App;