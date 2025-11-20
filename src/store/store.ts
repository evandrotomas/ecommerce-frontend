import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer as any, // <-- força a tipagem correta
  applyMiddleware(logger)
)

export default store
