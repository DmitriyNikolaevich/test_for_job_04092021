import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "../Modules/mainSlicer"

export const store = configureStore({
    reducer: {
      main: mainReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
  })

  window.__store__ = store