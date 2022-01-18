import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './index.less';
// import {Children} from './components/children';
export default connect(({ user }) => ({ ...user }))(IndexPage);

function IndexPage(props) {
  const { name, age } = props;
  return (
    <div>
      <h1>umi+dva</h1>
      <p>name:{name}</p>
      <p>age:{age}</p>
    </div>
  );
}
