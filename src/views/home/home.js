import React from 'react';

export class Home extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}