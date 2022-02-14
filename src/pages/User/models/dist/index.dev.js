'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var delay = function delay(ms) {
  return new Promise(function (r) {
    return setTimeout(r, ms);
  });
};

var _default = {
  namespace: 'user',
  state: {
    count: 1,
  },
  effects: {
    add:
      /*#__PURE__*/
      regeneratorRuntime.mark(function add(action, _ref) {
        var put, call;
        return regeneratorRuntime.wrap(function add$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                (put = _ref.put), (call = _ref.call);
                _context.next = 3;
                return call(delay, 1000);

              case 3:
                _context.next = 5;
                return put({
                  type: 'change',
                  payload: Math.random(),
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, add);
      }),
  },
  reducers: {
    change: function change(state, _ref2) {
      var payload = _ref2.payload;
      return {
        count: state.count + payload,
      };
    },
  },
};
exports['default'] = _default;
