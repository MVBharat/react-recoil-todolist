import React from 'react';
import { allUser } from '../../recoil/atoms/atom';

import { useRecoilState, useRecoilValue } from 'recoil';

function User() {
  const [userList, setUser] = useRecoilState(allUser);
  console.log(userList);

  return (
    <div>
      <p>{userList}</p>
      {/* <p>User name: {userList.name}</p>
      <p>User age {userList.age}</p> */}
    </div>
  );
}
export default User;
