import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice (reducers + actions)
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    reset: (state) => { state.count = 0; }
  }
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Create store
const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

export default store;
