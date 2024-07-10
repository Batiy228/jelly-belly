import { configureStore } from "@reduxjs/toolkit";
import beansReducer from "./Beans/slice";
import historyReducer from "./HistorySlider/slice";
import recipesReducer from "./Recipes/slice";
import factsReducer from "./Fact/slice";
import combinationReducer from "./Combination/slice";
import fullBeanReducer from "./FullBean/slice";

export const store = configureStore({
  reducer: {
    beans: beansReducer,
    history: historyReducer,
    recipes: recipesReducer,
    fact: factsReducer,
    combination: combinationReducer,
    fullBean: fullBeanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
