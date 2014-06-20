module.exports = {

  test: function(name, nodes) {
    return name === 'block';
  },

  process: function(node) {
    var delim_added = false;
    return node.filter(function(n) {
      if (n[0] !== 'decldelim') {
        delim_added = false;
        return true;
      }
      if (delim_added) {
        return false;
      }
      delim_added = true;
      return true;
    });
  }

};
