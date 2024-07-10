import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { mileStone } from "../../@types/mileStone";

export const fetchHistory = createAsyncThunk<
  mileStone[],
  string,
  {
    rejectValue: string;
  }
>("jelly-belly/fetchHistory", async (url) => {
  try {
    const { data } = await axios.get(url);

    return data.items;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("Unexpected error", e);
    }
  }
});
