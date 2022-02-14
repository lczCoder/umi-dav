const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export default {
  namespace: 'user',
  state: {
    count: 1,
  },
  effects: {
    *add(action, { put, call }) {
      yield call(delay, 1000);
      yield put({ type: 'change', payload: Math.random() });
    },
  },
  reducers: {
    change(state, { payload }) {
      return { count: state.count + payload };
    },
  },
};
