import React from 'react'
import PropTypes from 'prop-types'

const ChannelControls = ({onMuteClick, onSoloClick, onSliderMove, isChannelSoloed, isChannelMuted, volume}) => {
  const muteButtonStyle = {backgroundColor : (isChannelMuted ? 'red' : 'grey')};
  const soloButtonStyle = {backgroundColor : (isChannelSoloed ? 'green' : 'grey')};
  return (
    <div className="channel" >
      <div className="volume-fader" >
        <input type="range" value={volume} onChange={e => onSliderMove(parseInt(e.target.value, 10))}></input>
        <label>{volume}</label>
      </div>
      <button style={muteButtonStyle} onClick={onMuteClick}></button>
      <button style={soloButtonStyle} onClick={onSoloClick}></button>
    </div>
  );
}

ChannelControls.PropTypes = {
  onMuteClick: PropTypes.func.isRequired,
  onSoloClick: PropTypes.func.isRequired,
  onSliderMove: PropTypes.func.isRequired,
  isChannelSoloed: PropTypes.bool.isRequired,
  isChannelMuted: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
}

export default ChannelControls
