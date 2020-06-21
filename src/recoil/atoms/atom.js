import { atom } from 'recoil';

export const numState = atom({
  key: 'countNum',
  default: 0,
});
