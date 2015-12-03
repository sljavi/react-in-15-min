import React from 'react';
import {VelocityComponent} from 'velocity-react';
import 'velocity-animate/velocity.ui';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null
    };
  }

  componentDidMount() {
    this.state.interval = setInterval(this.shakeBomb.bind(this), 1000 * 30);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
    this.state.interval = null;
  }

  shakeBomb() {
    this.refs.bomb.runAnimation();
  }

  render() {
    return (
      <VelocityComponent ref='bomb' animation='callout.tada' duration={500}>
        <img className='bomb' src='images/bomb.png' alt='bomb' />
      </VelocityComponent>
    );
  }
};

export default Bomb;
