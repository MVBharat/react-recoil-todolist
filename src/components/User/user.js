import React from 'react';
import {
  getUserDataLists,
  addToNumState,
} from '../../recoil/selector/selector';
import { numState } from '../../recoil/atoms/atom';

import { useRecoilState, useRecoilValue } from 'recoil';

function User() {
  const users = useRecoilValue(getUserDataLists);
  const numSt = useRecoilValue(addToNumState);
  const usersFromAtom = useRecoilState(numState);
  
  return users.map((user) => (
    <div key={user.id}>
      {user.name}, Count: {usersFromAtom}, <br />
      Add +2: {numSt}
    </div>
  ));
}

export default User;
