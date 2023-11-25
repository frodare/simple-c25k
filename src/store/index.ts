import { configureStore } from '@reduxjs/toolkit'
import activity from './slices/activity';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import status from './slices/status';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedActivitySlice = persistReducer(persistConfig, activity.reducer);

const store = configureStore({
  reducer: {
    activity: persistedActivitySlice,
    status: status.reducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const persistor = persistStore(store)

export default store;
