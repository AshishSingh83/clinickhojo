// import { configureStore } from '@reduxjs/toolkit'
// import registerReducer from '../data/features/registerSlice'
// import storage from 'redux-persist/lib/storage';
// import {persistReducer} from 'redux-persist';
// import {combineReducers} from '@reduxjs/toolkit';
// const persistConfig = {
//     key :'root',
//     version:1,
//     storage
// }

  
// const reducer = combineReducers({
//     register: registerReducer,
// });
// const persistedReducer = persistReducer(persistConfig,reducer);

// export const store = configureStore({
//     reducer: persistedReducer
// })

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import registerReducer from '../data/features/registerSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer,
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  register: registerReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


