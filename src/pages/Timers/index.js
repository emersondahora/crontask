import React, { Component } from 'react';
import Sound from 'react-sound';
import { Container, ContainerTimers, Header } from './styles';

import Timer from './Timer';

import DingDongWav from '../../assets/DINGDONG.WAV';

export default class Timers extends Component {
  state = {
    soundStatus: Sound.status.STOPPED,
    timers: [
      {
        name: 'Geral Hora',
        time: 3601,
      },
      {
        name: 'Geral Minuto',
        time: 5,
      },
    ],
  };

  handlePlayAlarm = () => {
    this.setState({ soundStatus: Sound.status.PLAYING });
  };

  render() {
    const { timers, soundStatus } = this.state;
    return (
      <Container>
        <Header>TIMER JS</Header>
        <ContainerTimers>
          <Sound
            url={DingDongWav}
            playStatus={soundStatus}
            playFromPosition={0}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
          {timers.map((timer, index) => (
            <Timer
              time={timer.time}
              name={timer.name}
              key={String(index)}
              onTimeOver={() => this.handlePlayAlarm()}
            />
          ))}
        </ContainerTimers>
      </Container>
    );
  }
}
