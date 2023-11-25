import { configureStore } from '@reduxjs/toolkit'
import activitySlice from '../features/activity/activitySlice';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedActivitySlice = persistReducer(persistConfig, activitySlice)

const store = configureStore({
  reducer: {
    activity: persistedActivitySlice,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;

export const persistor = persistStore(store)
