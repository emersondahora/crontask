import React, { Component } from 'react';

import Sound from 'react-sound';

import DingDongWav from './assets/DINGDONG.WAV';
import GlobalStyles from './styles/global';

import Timer from './pages/Timer';

export default class App extends Component {
  state = {
    soundStatus: Sound.status.STOPED,
  };

  hanblePlayAlarm = () => {
    this.setState({ soundStatus: Sound.status.PLAYING });
  };

  render() {
    const { soundStatus } = this.state;
    return (
      <>
        <Sound
          url={DingDongWav}
          playStatus={soundStatus}
          playFromPosition={0}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        <Timer onTimeOver={() => this.hanblePlayAlarm()} />
        <GlobalStyles />
      </>
    );
  }
}
