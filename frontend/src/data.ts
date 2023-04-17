import { Food } from './app/shared/models/Food';
import { Tags } from './app/shared/models/Tags';

export const sampleFood: Food[] = [
  {
    id: '1',
    name: 'Burger',
    price: 5.99,
    tags: ['fast food', 'burger'],
    favorite: true,
    stars: 2,
    imageUrl: 'assets/images/images1.jpeg',
    origins: ['USA'],
    cookTime: '10 min',
  },
  {
    id: '2',
    name: 'Pizza',
    price: 4.99,
    tags: ['fast food', 'pizza'],
    favorite: false,
    stars: 4.5,
    imageUrl: 'assets/images/images2.jpeg',
    origins: ['Italy'],
    cookTime: '15 min',
  },
  {
    id: '3',
    name: 'Pasta',
    price: 6.99,
    tags: ['fast food', 'pasta'],
    favorite: false,
    stars: 5,
    imageUrl: 'assets/images/images3.jpg',
    origins: ['Italy', 'USA', 'France', 'Spain'],
    cookTime: '20 min',
  },
  {
    id: '4',
    name: 'Salad',
    price: 3.99,
    tags: ['fast food', 'salad'],
    favorite: true,
    stars: 3.5,
    imageUrl: 'assets/images/images4.jpeg',
    origins: ['USA'],
    cookTime: '5 min',
  },
  {
    id: '5',
    name: 'Sandwich',
    price: 4.99,
    tags: ['sandwich'],
    favorite: true,
    stars: 2,
    imageUrl: 'assets/images/images5.jpeg',
    origins: ['USA', 'Italy'],
    cookTime: '10 min',
  },
];

export const sampleTags: Tags[] = [
  { name: 'All', count: 5 },
  { name: 'burger', count: 1 },
  { name: 'pizza', count: 3 },
  { name: 'pasta', count: 2 },
  { name: 'salad', count: 1 },
  { name: 'sandwich', count: 4 },
];
