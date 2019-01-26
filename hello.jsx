import React, {Component} from 'react';

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React'
    }
  }

  render() {
    return <div>
      <h1>Hello {this.state.name}</h1>
    </div>;
  }
}

export default Hello;
