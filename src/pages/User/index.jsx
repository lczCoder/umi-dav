import React from 'react';
import { connect } from 'dva';

function Count({ dispatch, count, loading }) {
  console.log(loading);
  const isLoading = loading.models.count;
  // 单独对 effects 控制
  // const isLoading = loading.effects["count/add"]
  // 对多个 effects 控制
  // const isLoading = loading.effects["count/add"] || loading.effects["count/minus"] || false;

  return (
    <div>
      {isLoading ? <p>加载中...</p> : <p>{count}</p>}
      <button onClick={() => dispatch({ type: 'count/add' })}>+</button>
    </div>
  );
}

export default connect((state) => ({ ...state.count, loading: state.loading }))(
  Count,
);
