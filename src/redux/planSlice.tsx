import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { PageContextInitialState } from '../utils/constants'
import { PageContextInterface } from '../Interfaces/PagesInterfaces';

const initialState = PageContextInitialState
export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    updatePlan: (state: PageContextInterface, action: PayloadAction<PageContextInterface>) => {
      const { selectedPlan, priceOfPlan, } = action.payload;
      state.selectedPlan = selectedPlan;
      state.priceOfPlan = priceOfPlan;
    }
  }
})

export const { updatePlan } = planSlice.actions;
export default planSlice.reducer;