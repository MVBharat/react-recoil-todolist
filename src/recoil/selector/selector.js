import { selector } from 'recoil';
// import { getUserData } from '../data/user/userData';
import {  todoListFilterState, todoListState } from '../atoms/atom';

const url = `https://reqres.in/api/users?page=2`;

// TODO Use async-wait
// export const getUserDataLists = selector({
//   key: 'getUserDataLists',
//   get: ({ get }) => {
//     const response = getUserData();
//     return response;
//   },
// });

// export const addToNumState = selector({
//   key: 'addToNumState',
//   get: ({ get }) => {
//     return get(numState) + 2;
//   },
// });


// export const fetchUserDetails = selector({
//   key: 'userDetailsSelector',
//   get: async({get}) => {
//     try{
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     }
//     catch(error){
//       throw(error)
//     }
//   }
// })

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch(filter){
      case 'Show Completed': 
        return list.filter(item => item.isComplete);
      case 'Show Uncompleted':
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  }
})