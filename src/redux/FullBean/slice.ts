import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../@types/Status";
import { Bean } from "../../@types/Bean";
import { fetchFullBean } from "./asyncActions";

export interface IStateFullBean {
  bean: Bean | null;
  status: Status;
}

const initialState: IStateFullBean = {
  bean: null,
  status: Status.LOADING,
};

export const fullBeanSlice = createSlice({
  name: "bean",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullBean.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(
        fetchFullBean.fulfilled,
        (state, action: PayloadAction<Bean>) => {
          state.bean = action.payload;
          state.status = Status.SUCCESS;
        }
      )
      .addCase(fetchFullBean.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export default fullBeanSlice.reducer;
