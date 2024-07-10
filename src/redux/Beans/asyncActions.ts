import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PayloadBeans } from "../../@types/payloadBeans";

export const fetchBeans = createAsyncThunk<
  PayloadBeans,
  string,
  {
    rejectValue: string;
  }
>("jelly-belly/fetchBeans", async (url) => {
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
