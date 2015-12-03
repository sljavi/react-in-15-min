import React from 'react';
import Slide from './slide';
import Clock from './clock';
import Bang from './bang';
import Bomb from './bomb';

var $ = window.$;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBang: false
    };
  }

  showBang() {
    this.setState({
      showBang: true
    });
  }

  toogleBang() {
    this.setState({
      showBang: !this.state.showBang
    });
  }

  handleKeyUp(event) {
    if (event.keyCode === 66) {
      this.toogleBang();
    }
  }

  componentDidMount() {
    $('body').keyup(this.handleKeyUp.bind(this));
  }

  componentWillUnmount() {
    $('body').unbind('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className='fullheight'>
        <Slide frameUrl={this.props.frameUrl} />
        <Clock onTimeEnd={this.showBang.bind(this)} seconds={this.props.seconds}/>
        <Bomb />
        {this.state.showBang ? <Bang /> : null}
      </div>
    );
  }
};

Main.propTypes = {
  frameUrl: React.PropTypes.string.isRequired,
  seconds: React.PropTypes.number
};

export default Main;
