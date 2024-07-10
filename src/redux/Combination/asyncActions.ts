import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Combination } from "../../@types/Combination";
import { Bean } from "../../@types/Bean";

export const fetchCountOfCombinations = createAsyncThunk<
  number,
  string,
  {
    rejectValue: string;
  }
>("jelly-belly/fetchCountOfCombinations", async (url) => {
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

export const fetchCombination = createAsyncThunk<
  Combination,
  string,
  {
    rejectValue: string;
  }
>("jelly-belly/fetchCombination", async (url) => {
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

export const fetchBeanByTitle = createAsyncThunk<
  Bean,
  string,
  {
    rejectValue: string;
  }
>("jelly-belly/fetchBeanByTitle", async (title) => {
  try {
    const url = `https://jellybellywikiapi.onrender.com/api/beans?flavorName=${title}`;
    const { data } = await axios.get(url);
    return data.items[0];
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error("Unexpected error", e);
    }
  }
});
