import { createStore, applyMiddleware, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './root-reducer'

const logger = createLogger({
  collapsed: true
})

const typedLogger = logger as unknown as Middleware

const store = createStore(rootReducer, applyMiddleware(typedLogger))

export type RootState = ReturnType<typeof store.getState>

export default store
