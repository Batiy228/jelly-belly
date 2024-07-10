import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../@types/Status";
import { fetchHistory } from "./asyncActions";
import { mileStone } from "../../@types/mileStone";

export interface IStateHistory {
  mileStone: mileStone[];
  page: number;
  status: Status;
}

const initialState: IStateHistory = {
  mileStone: [],
  page: 1,
  status: Status.LOADING,
};

export const historySlice = createSlice({
  name: "mileStone",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page++;
    },
    prevPage: (state) => {
      state.page--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        fetchHistory.fulfilled,
        (state, action: PayloadAction<mileStone[]>) => {
          state.mileStone = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchHistory.rejected, (state) => {
        state.mileStone = [];
        state.status = Status.ERROR;
      });
  },
});

export const { prevPage, nextPage } = historySlice.actions;

export default historySlice.reducer;
