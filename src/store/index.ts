import { configureStore } from "@reduxjs/toolkit";
import questionnaireSlice from "./features/questionnaire/questionnaireSlice";

const store = configureStore({
  reducer: {
    questionnaire: questionnaireSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
