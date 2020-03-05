import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TimerContainer } from './styles';

export default class Timer extends Component {
  state = {
    name: '',
    time: null,
    status: 'pause',
    loop: true,
  };

  async componentDidMount() {
    const { time: propTime, name, loop: propLoop, onTimeOver } = this.props;

    await this.setState({ time: propTime, name, loop: propLoop });
    this.timer = setInterval(() => {
      let { time } = this.state;
      const { status, loop } = this.state;
      if (status === 'play') {
        if (time > 0) {
          time -= 1;
          if (time === 0) {
            onTimeOver();
            if (loop) {
              time = propTime;
            }
          }
          this.setState({ time });
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  splitTime = () => {
    const { time } = this.state;
    const hours = String(parseInt(time / 3600, 10)).padStart(2, '0');
    const minutes = String(parseInt((time - hours * 3600) / 60, 10)).padStart(
      2,
      '0'
    );
    const seconds = String(
      parseInt(time - hours * 3600 - minutes * 60, 10)
    ).padStart(2, '0');

    return {
      hours,
      minutes,
      seconds,
    };
  };

  handleChangeTimerStatus = status => {
    this.setState({ status });
  };

  handleResetTimer = () => {
    const { time } = this.props;
    this.setState({ time });
  };

  render() {
    const { name, status } = this.state;
    const { hours, minutes, seconds } = this.splitTime();
    return (
      <TimerContainer>
        <strong>{name}: </strong>
        {hours ? `${hours}:` : ''} {minutes ? `${minutes}:` : ''}
        {seconds}
        <button
          type="button"
          onClick={() =>
            this.handleChangeTimerStatus(status === 'pause' ? 'play' : 'pause')
          }
        >
          {status === 'pause' ? 'Play' : 'Pause'}
        </button>
        <button type="button" onClick={() => this.handleResetTimer()}>
          Resetar
        </button>
      </TimerContainer>
    );
  }
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  onTimeOver: PropTypes.func,
};

Timer.defaultProps = {
  loop: true,
  onTimeOver: () => {},
};
