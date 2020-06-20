import { selector } from 'recoil';
import { numState } from '../atoms/atom';

export const squareState = selector({
  key: 'squareState',
  get: ({ get }) => {
    return get(numState) ** 2;
  },
});
