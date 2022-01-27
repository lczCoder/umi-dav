import React, { useEffect, useState } from 'react';

const Effect = () => {
  let [num, setNum] = useState(0);
  // 第二参数传入一个空数组,effect只在首次加载的时候触发
  // useEffect(() => {
  //   console.log('生命周期钩子');
  // }, []);

  // 第二参数不传的时候，会在组件首次加载和更新的时候触发
  // useEffect(() => {
  //   console.log('生命周期钩子');
  // });

  // 第二参数传入一个变量的时候，会在该变量状态更新的时候触发
  // useEffect(() => {
  //   console.log('生命周期钩子');
  // },[num]);

  // effect中返回一个函数的时候，会在组件销毁的时候触发
  useEffect(() => {
    console.log('num触发了');
    return () => {
      console.log('组件被销毁了');
    };
  }, [num]);
  return (
    <div>
      <hr />
      <h1>useEffect</h1>
      <h3>数量:{num}</h3>
      <button onClick={() => setNum(num + 1)}>改变</button>
    </div>
  );
};

export default Effect;
