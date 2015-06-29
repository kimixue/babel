"use strict";

var a = [];

var _loop = function (i) {
  a[i] = function () {
    console.log(i);
  };
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}

a[7]();
//# sourceMappingURL=index.js.map
