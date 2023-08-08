import { configureStore } from '@reduxjs/toolkit';

import CounterSlice from '../features/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: CounterSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

