import { connect } from 'react-redux'
import {setVolume, togglePlay, toggleChannelMute, toggleChannelSolo } from '../actions'
import Mixer from '../components/Mixer'

function isInSoloMode(channels){
  let soloMode = false;
  for (let i=0; i < channels.length; i++) {
    if (channels[i].isChannelSoloed) {
      soloMode = true;
      break;
    }
  }
  return soloMode;
}

const mapStateToProps = (state) => ({
  play: state.play,
  channels: state.channels,
  soloMode: isInSoloMode(state.channels)
})

const mapDispatchToProps = {
  onMuteClick: toggleChannelMute,
  onSoloClick: toggleChannelSolo,
  onPlayClick: togglePlay,
  onSliderMove: setVolume
}


const MixerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mixer)

export default MixerContainer
