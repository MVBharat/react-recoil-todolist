import { atom } from 'recoil';

export const numState = atom({
  key: 'countNum',
  default: 0,
});

// export const allUser = atom({
//   key: ['name', 'age'],
//   default: ['xyz', 10],
// });

export const allUser = atom([
  {
    key: 'name',
    default: 'xyz',
  },
  {
    key: 'age',
    default: 10,
  },
]);
