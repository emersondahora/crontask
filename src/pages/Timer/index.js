import React, { Component } from 'react';
// import { Container } from './styles';

export default class Timer extends Component {
  state = {
    crons: [
      {
        start: {
          minutes: 0,
          seconds: 5,
        },
        current: {
          minutes: 0,
          seconds: 5,
        },
      },
      {
        start: {
          minutes: 0,
          seconds: 12,
        },
        current: {
          minutes: 0,
          seconds: 12,
        },
      },
    ],
  };

  componentDidMount() {
    const { onTimeOver } = this.props;
    this.myInterval = setInterval(() => {
      const { crons } = this.state;

      const newCrons = crons.map(cron => {
        const newCron = cron;
        if (newCron.current.seconds === 0 && newCron.current.minutes === 0) {
        } else if (newCron.current.seconds > 0) {
          newCron.current.seconds -= 1;
        } else if (newCron.current.seconds === 0) {
          newCron.current.minutes -= 1;
          newCron.current.seconds = 59;
        }
        if (newCron.current.seconds === 0 && newCron.current.minutes === 0) {
          onTimeOver();
          newCron.current = { ...newCron.start };
        }
        return newCron;
      });
      this.setState({ crons: newCrons });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { crons, soundStatus } = this.state;
    return (
      <>
        {crons.map(({ current }, index) => (
          <div>
            {current.minutes === 0 && current.seconds === 0 ? (
              <h1>Busted!</h1>
            ) : (
              <h1>
                Timer {index + 1}: {current.minutes}:
                {current.seconds < 10 ? `0${current.seconds}` : current.seconds}
              </h1>
            )}
          </div>
        ))}
      </>
    );
  }
}
