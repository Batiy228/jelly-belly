import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../@types/Status";
import { fetchBeans } from "./asyncActions";
import { Bean } from "../../@types/Bean";
import { PayloadBeans } from "../../@types/payloadBeans";

export interface IStateBeans {
  beans: Bean[];
  page: number;
  totalPages: number;
  hasMore: boolean;
  status: Status;
}

const initialState: IStateBeans = {
  beans: [],
  page: 1,
  totalPages: 1,
  hasMore: true,
  status: Status.LOADING,
};

export const beansSlice = createSlice({
  name: "beans",
  initialState,
  reducers: {
    outOfBeans: (state) => {
      state.hasMore = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeans.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        fetchBeans.fulfilled,
        (state, action: PayloadAction<PayloadBeans>) => {
          state.beans.push(...action.payload.items);
          state.page++;
          state.totalPages = action.payload.totalPages;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchBeans.rejected, (state) => {
        state.beans = [];
        state.status = Status.ERROR;
      });
  },
});

export const { outOfBeans } = beansSlice.actions;

export default beansSlice.reducer;
