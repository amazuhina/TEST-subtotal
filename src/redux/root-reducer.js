import {combineReducers} from "@reduxjs/toolkit";
import {reducer as dataReducer} from "./slice";

export const rootReducer = combineReducers({
  dataReducer: dataReducer,
})
