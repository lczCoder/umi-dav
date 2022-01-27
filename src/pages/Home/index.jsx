import React, { useState } from 'react';
import { connect } from 'dva';
import User from '../User';

const IndexPage = (props) => {
  return (
    <div>
      <h1>首页</h1>
      <User />
    </div>
  );
};

export default IndexPage;
