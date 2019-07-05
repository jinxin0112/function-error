import React, { useState, useCallback, useEffect } from 'react';

const Child = props => {
  useEffect(() => {
    props.log();
  }, [props.log]);
  return <>Child</>;
};

export default () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const log = useCallback(() => {
    console.log(count);
  }, [count]);

  const handleClickCount = () => {
    setCount(c => c + 1);
  };

  const handleClickNum = () => {
    setNum(n => n + 1);
  };

  return (
    <>
      <button onClick={handleClickCount}>count+</button>
      <button onClick={handleClickNum}>num+</button>
      <br />
      <h3>count: {count}</h3>
      <h3>num: {num}</h3>
      <Child log={log} count={count} />
    </>
  );
};
