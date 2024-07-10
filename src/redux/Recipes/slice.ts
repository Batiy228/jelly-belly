import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../@types/Status";
import { fetchRecipes } from "./asyncActions";
import { Recipe } from "../../@types/Recipe";
import { payloadRecipes } from "../../@types/payloadRecipes";

export interface IStateRecipes {
  recipes: Recipe[];
  page: number;
  totalPages: number;
  hasMore: boolean;
  status: Status;
}

const initialState: IStateRecipes = {
  recipes: [],
  page: 1,
  totalPages: 1,
  hasMore: true,
  status: Status.LOADING,
};

export const recipesSlice = createSlice({
  name: "mileStone",
  initialState,
  reducers: {
    outOfRecipes: (state) => {
      state.hasMore = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        fetchRecipes.fulfilled,
        (state, action: PayloadAction<payloadRecipes>) => {
          state.recipes.push(...action.payload.items);
          state.page++;
          state.totalPages = action.payload.totalPages;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchRecipes.rejected, (state) => {
        state.recipes = [];
        state.status = Status.ERROR;
      });
  },
});

export const { outOfRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
