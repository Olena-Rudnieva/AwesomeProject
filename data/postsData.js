const photo1 = require('../assets/images/image1.jpg');
const photo2 = require('../assets/images/image2.jpg');
const photo3 = require('../assets/images/image3.jpg');
const authorAvatar1 = require('../assets/images/authorAvatar1.png');
const authorAvatar2 = require('../assets/images/authorAvatar2.png');

export const postsData = [
  {
    id: 1,
    src: photo1,
    title: 'Ліс',
    location: 'Ukraine',
    comments: [
      {
        id: 1,
        comment:
          'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
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
    src: photo2,
    title: 'Захід на Чорному морі',
    location: 'Ukraine',
    comments: [
      {
        id: 1,
        comment:
          'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
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
    src: photo3,
    title: 'Старий будиночок у Венеції',
    location: 'Italy',
    comments: [
      {
        id: 1,
        comment:
          'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
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
];
