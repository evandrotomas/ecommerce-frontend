import storage from 'redux-persist/lib/storage'
import rootReducer from './root-reducer'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import thunk from 'redux-thunk'
import { configureStore, Middleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
}

const persistedRootReducer: typeof rootReducer = persistReducer(
  persistConfig,
  rootReducer
)

const logger = createLogger({
  collapsed: true
})

const typedLogger = logger as unknown as Middleware

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: [thunk, typedLogger]
})

export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
