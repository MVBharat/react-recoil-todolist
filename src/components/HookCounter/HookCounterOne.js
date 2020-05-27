import React, { useEffect, useState } from 'react';

const HookCounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect rendered running method')
        document.title = `you clickde ${count} times`
    },[count])
  return (
      <div>
          <input type="text" vlaue={name} onChange={(e) => setName({name: e.target.vlaue})} />
      <button onClick={() => setCount(count + 1)}>Click {count} times </button>
    </div>
  );
};

export default HookCounterOne;
