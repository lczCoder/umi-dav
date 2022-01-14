import React from 'react';
import { connect } from 'dva';

export default connect(({ user }) => ({
  name: user.name,
  age: user.age,
}))(User);

function User(props) {
  const { name, dispatch } = props;
  const xxx = () => {
    console.log('xixi');
    dispatch({ type: 'user/changeName', payload: 'lxl' });
  };
  return (
    <>
      <h3>用户页面</h3>
      <p>目前的名称是:{name}</p>
      <button onClick={xxx}>改变名字</button>
    </>
  );
}

// export default User;
