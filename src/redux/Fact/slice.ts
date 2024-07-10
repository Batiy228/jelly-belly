import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../@types/Status";
import { fetchCountOfFacts, fetchFact } from "./asyncActions";
import { Fact } from "../../@types/Fact";

export interface IStateFact {
  fact: Fact | null;
  totalCount: number;
  status: Status;
  statusFact: Status;
}

const initialState: IStateFact = {
  fact: null,
  totalCount: 0,
  status: Status.LOADING,
  statusFact: Status.LOADING,
};

export const factsSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountOfFacts.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchFact.pending, (state) => {
        state.statusFact = Status.LOADING;
      })
      .addCase(
        fetchCountOfFacts.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.totalCount = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchFact.fulfilled, (state, action: PayloadAction<Fact>) => {
        state.fact = action.payload;
        state.statusFact = Status.SUCCESS;
      })
      .addCase(fetchCountOfFacts.rejected, (state) => {
        state.status = Status.ERROR;
      })
      .addCase(fetchFact.rejected, (state) => {
        state.statusFact = Status.ERROR;
      });
  },
});

export default factsSlice.reducer;
