import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type QuestionnaireState = {
  currentStep: number;
  webSeries: string;
  generatedCoupon: string;
  enteredCoupon: string;
  note: string;
};
const initialState: QuestionnaireState = {
  currentStep: 0,
  webSeries: "",
  generatedCoupon: "",
  enteredCoupon: "",
  note: "",
};

const favSeriesSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    setSelectedWebSeries: (state, action: PayloadAction<string>) => {
      state.webSeries = action.payload;
    },
    setGeneratedCoupon: (state, action: PayloadAction<string>) => {
      state.generatedCoupon = action.payload;
    },
    setEnteredCoupon: (state, action: PayloadAction<string>) => {
      state.enteredCoupon = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const {
  setSelectedWebSeries,
  setEnteredCoupon,
  setGeneratedCoupon,
  setNote,
  setCurrentStep,
} = favSeriesSlice.actions;
export default favSeriesSlice.reducer;
