import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch, RootState } from "../store";
import { Fact } from "../../@types/Fact";

export const fetchCountOfFacts = createAsyncThunk<
  number,
  string,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
  }
>("jelly-belly/fetchCountOfFacts", async (url) => {
  try {
    const { data } = await axios.get(url);

    return data.totalCount;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("Unexpected error", e);
    }
  }
});

export const fetchFact = createAsyncThunk<
  Fact,
  string,
  {
    rejectValue: string;
  }
>("jelly-belly/fetchFact", async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("Unexpected error", e);
    }
  }
});
