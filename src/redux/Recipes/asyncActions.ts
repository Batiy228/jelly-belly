import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { payloadRecipes } from "../../@types/payloadRecipes";

export const fetchRecipes = createAsyncThunk<
  payloadRecipes,
  string,
  {
    rejectValue: string;
  }
>("jelly-belly/fetchRecipes", async (url) => {
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
