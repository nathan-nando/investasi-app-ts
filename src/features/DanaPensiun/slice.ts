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
}

const initialState: DanaPensiunState = {
  data: [],
  loading: false,
  error: null,
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
  },
});

export const { addDanaPensiun } = danaPensiunSlice.actions;

export default danaPensiunSlice.reducer;
