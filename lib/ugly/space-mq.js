var util = require('../util.js');

module.exports = {

  test: function(name, nodes) {
    return name === 'atrulerq';
  },

  process: function(node) {
    util.trimRight(node);

    for (var i = 1; i < node.length; i++) {
      if (node[i][0] === 'operator') {
        util.trimPrevNext(node, i);
      }
    }

    return node;
  }

};
