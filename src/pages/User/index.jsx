import React from 'react';
import { connect } from 'dva';

function User(props) {
  console.log('props', props);
  return <h3>User视图</h3>;
}

export default connect(({ user }) => ({
  ...user,
}))(User);
