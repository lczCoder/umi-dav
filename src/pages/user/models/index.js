import axios from 'axios';

export default {
  namespace: 'user',
  state: {
    name: 'lcz',
    age: 24,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      console.log('首次进入');
      dispatch({
        type: 'getList',
      });
    },
  },
  reducers: {
    changeName(state, { payload }) {
      console.log('payload', payload);
      state.name = payload;
      return { ...state };
    },
  },
  effects: {
    *getList({ payload }, { call, put }) {
      const res = yield call(axios.get('http://192.168.3.197:3000/books', {}));
      console.log('res', res);
    },
  },
};
