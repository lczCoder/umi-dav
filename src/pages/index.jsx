import React, { useState } from 'react';
import styles from './index.less';
import User from './user/index';

export default function IndexPage(props) {
  return (
    <div>
      <h1>umi+dva</h1>
      <div>{props.children}</div>
    </div>
  );
}
