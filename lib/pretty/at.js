module.exports = {

  test: function(name, nodes) {
    return name === 'atruleb';
  },

  process: function(node) {
    console.log(node);
    node.splice(2, 0, ['s', ' ']);
    return node;
  }

};
