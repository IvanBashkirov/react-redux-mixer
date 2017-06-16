import { Component } from 'react'
import PropTypes from 'prop-types'
import buzz from 'buzz'

class BuzzAudio extends Component {

  static propTypes = {
    play: PropTypes.bool.isRequired,
    soloMode: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
    isChannelSoloed: PropTypes.bool.isRequired,
    isChannelMuted: PropTypes.bool.isRequired,
    soundSource: PropTypes.string.isRequired
  }

  toggleMuteAsNeeded(sound, isSoloed, isMuted, soloMode) {
   (isSoloed || (!isMuted && !soloMode)) ? sound.unmute() : sound.mute();
  }

  togglePlayAsNeeded(sound, play){
    play ? sound.play() : sound.stop();
  }

  componentWillMount() {
    const sound = new buzz.sound(this.props.soundSource).loop();
    sound.setVolume(this.props.volume);
    this.toggleMuteAsNeeded(sound, this.props.isChannelSoloed, this.props.isChannelMuted, this.props.soloMode);
    this.togglePlayAsNeeded(sound, this.props.play);
    this.sound = sound;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.soundSource !== nextProps.soundSource) {
      const sound = new buzz.sound(nextProps.soundSource).loop();
      sound.setVolume(nextProps.volume);
      this.toggleMuteAsNeeded(sound, nextProps.isChannelSoloed, nextProps.isChannelMuted, nextProps.soloMode);
      this.togglePlayAsNeeded(sound, nextProps.play);
      this.sound = sound;
      return;
    }
    if (this.props.volume !== nextProps.volume) this.sound.setVolume(nextProps.volume);
    if (this.props.isChannelSoloed !== nextProps.isChannelSoloed ||
        this.props.isChannelMuted !== nextProps.isChannelMuted ||
        this.props.soloMode !== nextProps.soloMode) this.toggleMuteAsNeeded(this.sound, nextProps.isChannelSoloed, nextProps.isChannelMuted, nextProps.soloMode);
    if (this.props.play !== nextProps.play) this.togglePlayAsNeeded(this.sound, nextProps.play);
  }

  render(){return null;}
}

export default BuzzAudio
