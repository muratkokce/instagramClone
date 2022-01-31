import Icons from 'Theme/Icons';
import Images from 'Theme/Images';

const ExamplePosts = [
  {
    id: 0,
    name: 'John Stone',
    description: 'Video Desctription 0',
    like: 10,
    post: [
      {
        type: 'video',
        source: 'videoUrl',
      },
    ],
  },

  {
    id: 1,
    name: 'Mia Wong',
    description: 'Desctription 2',
    like: 101,
    post: [
      {
        type: 'photo',
        source: 'imageUrl',
      },
      {
        type: 'photo',
        source: 'imageUrl',
      },
    ],
  },
  {
    id: 3,
    name: 'Eugenia Anders',
    description: 'Video Desctription 1',
    like: 99,
    post: [
      {
        type: 'video',
        source: 'videoUrl',
      },
    ],
  },
  {
    id: 2,
    name: 'Nguta Ithya',
    description: 'Desctription 4',
    like: 303,
    post: [
      {
        type: 'photo',
        source: 'imageUrl',
      },
    ],
  },
];

export default ExamplePosts;
