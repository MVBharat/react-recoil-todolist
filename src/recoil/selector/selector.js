import { selector } from 'recoil';
import { getUserData } from '../data/user/userData';
import { numState } from '../atoms/atom';

// TODO Use async-wait
export const getUserDataLists = selector({
  key: 'getUserDataLists',
  get: ({ get }) => {
    const response = getUserData();
    return response;
  },
});

export const addToNumState = selector({
  key: 'addToNumState',
  get: ({ get }) => {
    return get(numState) + 2;
  },
});
