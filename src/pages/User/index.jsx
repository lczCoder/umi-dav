import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
const User = (props) => {
  const { name, loading } = props;
  const isLoading = loading.effects['user/query'];
  return (
    <>
      <h3>User视图</h3>
      <p>{name}</p>
      <Table loading={loading.global}></Table>
    </>
  );
};

export default connect(({ user, loading }) => ({
  ...user,
  loading,
}))(User);
