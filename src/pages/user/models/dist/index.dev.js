'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _axios = _interopRequireDefault(require('axios'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var _default = {
  namespace: 'user',
  state: {
    name: 'lcz',
    age: 24,
  },
  subscriptions: {
    setup: function setup(_ref) {
      var dispatch = _ref.dispatch,
        history = _ref.history;
      console.log('首次进入');
      dispatch({
        type: 'getList',
      });
    },
  },
  reducers: {
    changeName: function changeName(state, _ref2) {
      var payload = _ref2.payload;
      console.log('payload', payload);
      state.name = payload;
      return _objectSpread({}, state);
    },
  },
  effects: {
    getList:
      /*#__PURE__*/
      regeneratorRuntime.mark(function getList(_ref3, _ref4) {
        var payload, call, put, res;
        return regeneratorRuntime.wrap(function getList$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                payload = _ref3.payload;
                (call = _ref4.call), (put = _ref4.put);
                _context.next = 4;
                return call(
                  _axios['default'].get('http://192.168.3.197:3000/books', {}),
                );

              case 4:
                res = _context.sent;
                console.log('res', res);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, getList);
      }),
  },
};
exports['default'] = _default;
