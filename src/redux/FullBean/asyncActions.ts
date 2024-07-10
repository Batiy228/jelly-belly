import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Bean } from "../../@types/Bean";

export const fetchFullBean = createAsyncThunk<
  Bean,
  string,
  {
    rejectValue: string;
  }
>("jelly-belly/fetchFullBean", async (id) => {
  try {
    const url = `https://jellybellywikiapi.onrender.com/api/Beans/${id}`;
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
