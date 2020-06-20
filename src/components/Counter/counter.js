import React from 'react';
import { numState } from '../../recoil/atoms/atom';
import { squareState } from '../../recoil/selector/selector';
import { useRecoilState, useRecoilValue } from 'recoil';

function Counter() {
  const [number, setNumber] = useRecoilState(numState);
  const squareNumber = useRecoilValue(squareState);

  return (
    <div>
      <p>count :{number}</p>
      <p>square of number :{squareNumber}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
}
export default Counter;
