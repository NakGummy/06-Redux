import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state: CounterState) => {
      state.value += 1;
    },

    decrement: (state: CounterState) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
