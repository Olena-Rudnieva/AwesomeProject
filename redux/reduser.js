import { combineReducers } from '@reduxjs/toolkit';
import { postsReducer } from './posts/postsSlice';

export const combineReducer = combineReducers({
  posts: postsReducer,
});
