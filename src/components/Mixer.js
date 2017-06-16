import React from 'react'
import PropTypes from 'prop-types'
import Channel from './Channel'

const Mixer = ({channels, soloMode, play, onMuteClick, onSoloClick, onSliderMove, onPlayClick}) => (
  <div >
    <div className='mixer'> {channels.map(ch =>
      <Channel key={ch.id}
               {...ch}
               onMuteClick={(() => onMuteClick(ch.id))}
               onSoloClick={(() => onSoloClick(ch.id))}
               onSliderMove={volume => onSliderMove(volume, ch.id)}
               soloMode={soloMode}
               play={play}
      />)}
    </div>
    <button onClick={onPlayClick}>{play ? 'Stop' : 'Play'}</button>
  </div>
);

Mixer.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
    isChannelSoloed: PropTypes.bool.isRequired,
    isChannelMuted: PropTypes.bool.isRequired,
    soundSource:  PropTypes.string.isRequired
  }).isRequired).isRequired,
  soloMode: PropTypes.bool.isRequired,
  play: PropTypes.bool.isRequired,
  onMuteClick: PropTypes.func.isRequired,
  onSoloClick: PropTypes.func.isRequired,
  onSliderMove: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired
}

export default Mixer
