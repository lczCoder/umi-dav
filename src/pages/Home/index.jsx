import React, { useState } from 'react';
import { connect } from 'dva';
import Upload from '../upload';
import User from '../user';
import CSI from 'csijs';
import Demo from '../Demo';
const IndexPage = (props) => {
  const csi = new CSI({
    feID: 'umi', // 项目id，日志区分项目使用
    report: (lines) => {
      // todo 自定义你的上报逻辑
      // console.log('error lins', lines);
    },
  });
  try {
    throw new Error('2131');
  } catch (error) {}
  return (
    <div>
      <h1>首页</h1>
      {/* <Upload></Upload> */}
      {/* <User></User> */}
      <Demo />
    </div>
  );
};

export default IndexPage;
