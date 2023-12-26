import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  name: null,
  email: null,
  image: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.id,
      name: payload.name,
      email: payload.email,
      image: payload.image,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => initialState,

    updatePhoto: (state, { payload }) => {
      state.image = payload.avatar;
    },
  },
});

export const authReducer = authSlice.reducer;
