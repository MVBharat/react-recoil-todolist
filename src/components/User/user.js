import React from 'react';
import {getUserDataList } from '../../recoil/selector/selector'

import { useRecoilValue } from 'recoil';

const  User = () => {

  const user = useRecoilValue(getUserDataList)
  
  console.log("user data: "+ user);
  return (
    <p>hello</p>
  )
  
}
export default User;
