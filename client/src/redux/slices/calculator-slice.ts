import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  isLoading: boolean;
  error: string;
  value: string;
  method: string;
  secondValue: string;
  previousNumbers: string[];
}

const initialState: CounterState = {
  isLoading: false,
  error: "",
  value: "",
  method: "",
  secondValue: "",
  previousNumbers: [],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    startFetching: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    errorFetching: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    successFetching: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.method = "";
      state.secondValue = "";
      state.value = action.payload;
    },
    increment: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    secondIncrement: (state, action: PayloadAction<string>) => {
      state.secondValue += action.payload;
    },
    removeNumber: (state) => {
      if (!state.secondValue.length && !state.method) {
        state.value = state.value.slice(0, -1);
      }
      if (!state.secondValue.length) {
        state.method = "";
      }
      if (state.secondValue.length) {
        state.secondValue = state.secondValue.slice(0, -1);
      }
    },
    clearState: (state) => {
      state.method = "";
      state.secondValue = "";
      state.value = "";
    },
    setMethod: (state, action: PayloadAction<string>) => {
      state.method = action.payload;
    },
    getResult: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "+":
          state.value = String(Number(state.value) + Number(state.secondValue));
          state.method = "";
          state.secondValue = "";

          break;

        default:
          break;
      }
    },
    setMinusValue: (state) => {
      if (state.method.length) {
        if (state.secondValue[0] !== "-") {
          if (state.method === "-") {
            state.method = "+";
          } else {
            state.secondValue = "-" + state.secondValue;
          }
        } else {
          state.secondValue = state.secondValue
            .split("")
            .filter((item) => item !== "-")
            .join("");
        }
      } else {
        if (state.value[0] !== "-") {
          state.value = "-" + state.value;
        } else {
          state.value = state.value
            .split("")
            .filter((item) => item !== "-")
            .join("");
        }
      }
    },
    setPreviousNumbers: (state, action: PayloadAction<string>) => {
      state.previousNumbers = [action.payload, ...state.previousNumbers];
    },
    setValueFromPreviousNumber: (state, action: PayloadAction<string>) => {
      if (state.method) {
        state.secondValue = action.payload;
      } else {
        state.value = action.payload;
      }
    },
    clearPreviousValue: (state) => {
      state.previousNumbers = [];
    },
  },
});

export const {
  startFetching,
  errorFetching,
  setMinusValue,
  successFetching,
  increment,
  removeNumber,
  setMethod,
  clearState,
  secondIncrement,
  getResult,
  setPreviousNumbers,
  setValueFromPreviousNumber,
  clearPreviousValue,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
