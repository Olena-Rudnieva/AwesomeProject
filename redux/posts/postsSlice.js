import { createSlice } from '@reduxjs/toolkit';
const authorAvatar1 = require('../../assets/images/authorAvatar1.png');
const authorAvatar2 = require('../../assets/images/authorAvatar2.png');
// import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: 1,
      uri: 'https://img.freepik.com/free-photo/narrow-pathway-near-a-lot-of-trees-in-the-new-forest-near-brockenhurst-uk_181624-11974.jpg',
      title: 'Ліс',
      place: 'Ukraine',
      comments: [
        {
          id: 1,
          comment:
            '1 Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
          authorAvatar: authorAvatar2,
          createdTime: '09 червня, 2020 | 08:40',
        },
        {
          id: 2,
          comment:
            'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
          authorAvatar: authorAvatar1,
          createdTime: '09 червня, 2020 | 09:14',
        },
        {
          id: 3,
          comment: 'Thank you! That was very helpful!',
          authorAvatar: authorAvatar2,
          createdTime: '09 червня, 2020 | 09:20',
        },
      ],
    },
    {
      id: 2,
      uri: 'https://img.freepik.com/free-photo/sunset-beach-and-sea-wave_1150-11145.jpg',
      title: 'Захід на Чорному морі',
      place: 'Ukraine',
      comments: [
        {
          id: 1,
          comment:
            '2 Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
          authorAvatar: authorAvatar2,
          createdTime: '09 червня, 2020 | 08:40',
        },
        {
          id: 2,
          comment:
            'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
          authorAvatar: authorAvatar1,
          createdTime: '09 червня, 2020 | 09:14',
        },
        {
          id: 3,
          comment: 'Thank you! That was very helpful!',
          authorAvatar: authorAvatar2,
          createdTime: '09 червня, 2020 | 09:20',
        },
      ],
    },
    {
      id: 3,
      uri: 'https://img.freepik.com/free-photo/canal-architecture-outdoors-famous-place-generative-ai_188544-7855.jpg',
      title: 'Старий будиночок у Венеції',
      place: 'Italy',
      comments: [
        {
          id: 1,
          comment:
            '3 Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
          authorAvatar: authorAvatar2,
          createdTime: '09 червня, 2020 | 08:40',
        },
        {
          id: 2,
          comment:
            'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
          authorAvatar: authorAvatar1,
          createdTime: '09 червня, 2020 | 09:14',
        },
        {
          id: 3,
          comment: 'Thank you! That was very helpful!',
          authorAvatar: authorAvatar2,
          createdTime: '09 червня, 2020 | 09:20',
        },
      ],
    },
  ],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState.posts,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      //   prepare(data) {
      //     return {
      //       payload: {
      //         id: nanoid(),
      //         ...data,
      //       },
      //     };
      //   },
    },
    addComment: {
      reducer(state, action) {
        state.comments.push(action.payload);
      },
    },
  },
});

export const { addPost, addComment } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
