export default {
  namespace: 'user',
  state: {
    name: 'lcz',
    age: 24,
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {},
  },
};
