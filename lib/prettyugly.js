// parser
var gonzo = require('gonzales-ast');

function uglyfyAST(ast) {
  return gonzo.traverse(ast, [
    require('./ugly/space-functions.js'),
    require('./ugly/space-trim.js'),
    require('./ugly/space-single.js'),
    require('./ugly/space-delimiter.js'),
    require('./ugly/space-rulesets.js'),
    require('./ugly/space-attribs.js'),
    require('./ugly/space-important.js'),
    require('./ugly/space-mq.js'),
    require('./ugly/space-at-block.js'),
    require('./ugly/space-values.js'),
    require('./ugly/space-selectorops'),
    require('./ugly/ie-pseudo-fix.js'),
    require('./ugly/dedup-delimiters.js'),
    require('./ugly/last-delimiter.js')
  ]);
}

function uglyAST(ast) {
  ast = uglyfyAST(ast);
  return gonzo.traverse(ast, [
    require('./ugly/comments.js')
  ]);
}

function prettyAST(ast) {
  ast = uglyfyAST(ast);
  return gonzo.traverse(ast, [
    require('./pretty/tops.js'),
    require('./pretty/blocks.js'),
    require('./pretty/at.js'),
    require('./pretty/at-block.js'),
    require('./pretty/value.js'),
    require('./pretty/last-delimiter.js'),
    require('./pretty/selector.js'),
    require('./pretty/mq.js')
  ]);
}

exports.ugly = function ugly(css) {
  var ast = gonzo.parse(css);
  ast = uglyAST(ast);
  return gonzo.toCSS(ast);
};

exports.pretty = function pretty(css) {
  var ast = gonzo.parse(css);
  ast = prettyAST(ast);
  
  console.log(gonzo.toCSS(ast));
  
  return gonzo.toCSS(ast);
};

exports.uglyAST = uglyAST;
exports.prettyAST = prettyAST;
exports.util = require('./util.js');