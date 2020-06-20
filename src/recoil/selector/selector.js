import { selector } from 'recoil';
import { getUserData } from '../data/user/userData'

export const getUserDataList = selector({
  key: "getUserDataList",
  get: async () => {
    const response = await getUserData();
    return response
  }

})