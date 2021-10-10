import {createSlice} from "@reduxjs/toolkit"

export const SortStatusType = {
  ASC: 'asc',
  DESC: 'desc'
}

const dataSlice = createSlice({
  name: 'dataSlice',

  initialState: {
    data: null,
    sortStatus: SortStatusType.DESC,
    isLoading: false
  },

  reducers: {
    pushData: (state, action) => {
      state.data = action.payload.data
    },

    setSortStatus: (state, action) => {
      state.sortStatus = action.payload.sortStatus
    },

    startLoading: (state) => {
      state.isLoading = true
    },
    finishLoading: (state) => {
      state.isLoading = false
    }
  }
})


export const dataSelector = (state) =>  state.dataReducer.data


export const sortStatusSelector = (state) => state.dataReducer.sortStatus

export const isLoadingSelector = (state) => state.dataReducer.isLoading


export const {
  pushData,
  sortIncrease,
  setSortStatus,
  startLoading,
  finishLoading
} = dataSlice.actions


export const reducer = dataSlice.reducer