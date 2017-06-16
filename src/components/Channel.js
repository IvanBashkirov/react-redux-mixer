import React from 'react'
import PropTypes from 'prop-types'
import ChannelControls from './ChannelControls'
import BuzzAudio from './BuzzAudio'

const Channel = ({play, soloMode, onMuteClick, onSoloClick, onSliderMove, volume, isChannelSoloed, isChannelMuted, soundSource}) => (
  <div>
    <BuzzAudio play={play}
               soloMode={soloMode}
               volume={volume}
               isChannelSoloed={isChannelSoloed}
               isChannelMuted={isChannelMuted}
               soundSource={soundSource}
    />
    <ChannelControls onMuteClick={onMuteClick}
                     onSoloClick={onSoloClick}
                     onSliderMove={onSliderMove}
                     volume={volume}
                     isChannelMuted={isChannelMuted}
                     isChannelSoloed={isChannelSoloed}
    />
  </div>
)

Channel.propTypes = {
  play: PropTypes.bool.isRequired,
  soloMode: PropTypes.bool.isRequired,
  onMuteClick: PropTypes.func.isRequired,
  onSoloClick: PropTypes.func.isRequired,
  onSliderMove: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  isChannelMuted: PropTypes.bool.isRequired,
  isChannelSoloed: PropTypes.bool.isRequired,
  soundSource: PropTypes.string.isRequired
}

export default Channel
