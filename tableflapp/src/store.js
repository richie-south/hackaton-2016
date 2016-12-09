import { createStore, compose } from 'redux'
import rootReducer from './reducers/index'
import reduxReset from 'redux-reset'
import defaultState from './defaultState'



const enHanceCreateStore = compose(
    reduxReset()  // Will use 'RESET' as default action.type to trigger reset
  )(createStore)
const store = enHanceCreateStore(rootReducer, defaultState)


//const store = createStore(, defaultState)

export default store
