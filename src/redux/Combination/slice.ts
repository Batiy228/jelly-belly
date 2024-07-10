import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../@types/Status";
import {
  fetchBeanByTitle,
  fetchCombination,
  fetchCountOfCombinations,
} from "./asyncActions";
import { Combination } from "../../@types/Combination";
import { Bean } from "../../@types/Bean";

export interface IStateCombination {
  combination: Combination | null;
  beans: Bean[];
  totalCount: number;
  status: Status;
}

const initialState: IStateCombination = {
  combination: null,
  beans: [],
  totalCount: 0,
  status: Status.LOADING,
};

export const combinationSlice = createSlice({
  name: "combination",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountOfCombinations.pending, (state) => {
        state.status = Status.LOADING;
      })

      .addCase(
        fetchCountOfCombinations.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.totalCount = action.payload;
          state.status = Status.SUCCESS;
        }
      )

      .addCase(fetchCountOfCombinations.rejected, (state) => {
        state.status = Status.ERROR;
      })
      .addCase(fetchCombination.pending, (state) => {
        state.status = Status.LOADING;
      })

      .addCase(
        fetchCombination.fulfilled,
        (state, action: PayloadAction<Combination>) => {
          state.combination = action.payload;
          state.status = Status.SUCCESS;
          state.beans = [];
        }
      )
      .addCase(
        fetchBeanByTitle.fulfilled,
        (state, action: PayloadAction<Bean>) => {
          state.beans.push(action.payload);
          state.status = Status.SUCCESS;
        }
      )

      .addCase(fetchCombination.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export default combinationSlice.reducer;
