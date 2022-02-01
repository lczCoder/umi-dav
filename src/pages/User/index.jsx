import React from 'react';
import { connect } from 'dva';

@connect(({ user }) => ({
  ...user,
}))
export default class User extends React.Component {
  constructor(props) {
    console.log(props);
    super();
  }
  render() {
    return <h3>User视图</h3>;
  }
}
