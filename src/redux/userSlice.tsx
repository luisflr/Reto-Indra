import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

import { UserInterface } from '../Interfaces/PagesInterfaces';
import { INITIAL_STATE } from '../utils/constants'

const initialState = INITIAL_STATE
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authUser: (state: UserInterface, action: PayloadAction<UserInterface>) => {
      const { name, lastName, birthDay } = action.payload;
      state.name = name;
      state.lastName = lastName;
      state.birthDay = birthDay;
    }
  }
})

export const { authUser } = userSlice.actions;
export default userSlice.reducer;