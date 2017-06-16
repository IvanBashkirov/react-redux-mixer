import {combineReducers} from 'redux'
import {TOGGLE_CHANNEL_SOLO, TOGGLE_CHANNEL_MUTE, TOGGLE_PLAY, SET_VOLUME} from './actions'
import {initialChannelsState, initialPlayState} from './initialStates'


function channels(state = initialChannelsState, action) {
  switch (action.type) {
    case TOGGLE_CHANNEL_SOLO:
      return state.map((channel) => {
          if (channel.id === action.index) {
            return Object.assign({}, channel, {
              isChannelSoloed: !channel.isChannelSoloed
            })
          }
          return channel
        })
    case TOGGLE_CHANNEL_MUTE:
      return state.map((channel) => {
          if (channel.id === action.index) {
            return Object.assign({}, channel, {
              isChannelMuted: !channel.isChannelMuted
            })
          }
          return channel
        })
    case SET_VOLUME:
      return state.map((channel) => {
          if (channel.id === action.index) {
            return Object.assign({}, channel, {
              volume: action.value
            })
          }
          return channel
        })
    default:
      return state
  }
}

function play(state = initialPlayState, action) {
  switch (action.type) {
    case TOGGLE_PLAY:
      return !state
    default:
      return state
  }
}

const mixerApp = combineReducers({
  play,
  channels
})

export default mixerApp
