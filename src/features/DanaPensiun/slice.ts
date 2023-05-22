import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DanaPensiun {
  outcome: number;
  income: number;
  inflation: number;
}
export interface DanaPensiunState {
  data: DanaPensiun[];
  loading: boolean;
  error: string | null;
  stepForm: number;
}

const initialState: DanaPensiunState = {
  data: [],
  loading: false,
  error: null,
  stepForm: 1,
};

const danaPensiunSlice = createSlice({
  name: "dana_pensiun",
  initialState,
  reducers: {
    addDanaPensiun: (state, action: PayloadAction<DanaPensiun>) => {
      state.data.push({
        outcome: action.payload.outcome,
        income: action.payload.income,
        inflation: action.payload.inflation,
      });
    },
    nextStepForm: (state) => {
      state.stepForm += 1;
      if (state.stepForm > 3) {
        state.stepForm = 1;
      }
      console.log(state.stepForm);
    },
    prevStepForm: (state) => {
      state.stepForm -= 1;
      if (state.stepForm < 1) {
        state.stepForm = 1;
      }
    },
  },
});

export const { addDanaPensiun, nextStepForm, prevStepForm } =
  danaPensiunSlice.actions;

export default danaPensiunSlice.reducer;
