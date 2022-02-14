import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
function Count({ dispatch, count, loading }) {
  console.log(loading);
  // const isLoading = loading.models.user;
  // 单独对 effects 控制
  const isLoading = loading.effects['user/add'];
  // 对多个 effects 控制
  // const isLoading = loading.effects["count/add"] || loading.effects["count/minus"] || false;

  return (
    <div>
      {isLoading ? <p>加载中...</p> : <p>{count}</p>}
      <button onClick={() => dispatch({ type: 'user/add' })}>+</button>
      <Table loading={isLoading}></Table>
    </div>
  );
}

export default connect((state) => ({ ...state.user, loading: state.loading }))(
  Count,
);
