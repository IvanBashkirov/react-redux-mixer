//action types

export const TOGGLE_CHANNEL_SOLO = 'TOGGLE_CHANNEL_SOLO'
export const TOGGLE_CHANNEL_MUTE = 'TOGGLE_CHANNEL_MUTE'
export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const SET_VOLUME = 'SET_VOLUME'

//action creators

export function togglePlay() {
  return {
    type: TOGGLE_PLAY
  }
}

export function toggleChannelMute(index) {
  return {
    type: TOGGLE_CHANNEL_MUTE,
    index
  }
}

export function toggleChannelSolo(index) {
  return {
    type: TOGGLE_CHANNEL_SOLO,
    index
  }
}

export function setVolume(value, index) {
  return {
    type: SET_VOLUME,
    value,
    index
  }
}
