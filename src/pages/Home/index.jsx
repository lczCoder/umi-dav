import React, { useState } from 'react';
import { connect } from 'dva';
import Upload from '../upload';
const IndexPage = (props) => {
  return (
    <div>
      <h1>首页</h1>
      <Upload></Upload>
    </div>
  );
};

export default IndexPage;
