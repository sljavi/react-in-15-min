import React from 'react';
import 'flipclock';
import 'flipclockCss';

var $ = window.$;

class Clock extends React.Component {
  initClock() {
    var clock = $('.clock').FlipClock(this.props.seconds, {
      autoStart: false,
      clockFace: 'MinuteCounter',
      countdown: true,
      callbacks: {
        interval: this.handleInterval.bind(this)
      }
    });

    this.setState({
      clock: clock,
      playing: false
    });
  }

  togglePlayPause() {
    if (this.state.playing) {
      this.state.clock.stop();
    } else {
      this.state.clock.start();
    }
    this.setState({
      playing: !this.state.playing
    });
  }

  handleInterval() {
    if (this.state.clock.getTime().time === 0) {
      this.props.onTimeEnd();
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === 32) {
      this.togglePlayPause();
    }
  }

  componentDidMount() {
    this.initClock();
    $('body').keyup(this.handleKeyUp.bind(this));
  }

  componentWillUnmount() {
    $('body').unbind('keyup', this.handleKeyUp);
  }

  render() {
    return <div className='clock'></div>;
  }
};

Clock.defaultProps = {
  seconds: 60 * 5,
  onTimeEnd: () => {}
};

Clock.propTypes = {
  seconds: React.PropTypes.number,
  onTimeEnd: React.PropTypes.func
};

export default Clock;
