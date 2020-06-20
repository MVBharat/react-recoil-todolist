import { atom } from 'recoil';

export const numState = atom({
  key: 'countNum',
  default: 0,
});

export const currentContactState = atom({
  key: 'currentContactState',
  default: 1
})