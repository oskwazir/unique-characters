var test = require('tape');
var uniqCharacters = require('../index');

test('should return an object',
 function (t){
  var result = uniqCharacters('foo','foo');
  t.equal(Object.prototype.toString.call(result).slice(8,-1),'Object');
  t.end();
});

test('the returned object should contain two properties called leftUnique and rightUnique',
 function (t){
  var result = uniqCharacters('fing','fang');
  t.ok(result.leftUnique,'leftUnique does not exist');
  t.ok(result.rightUnique,'rightUnique does not exist');
  t.end();
});

test('leftUnique and rightUnique must always contain arrays',
 function (t){
  var result = uniqCharacters('fing','fang');
  var leftType = Object.prototype.toString.call(result.leftUnique).slice(8,-1);
  var rightType = Object.prototype.toString.call(result.rightUnique).slice(8,-1);
  t.equal(leftType,'Array');
  t.equal(rightType,'Array');

  result = null;
  leftType = null;
  rightType = null;

  result = uniqCharacters('foo','foo');
  leftType = Object.prototype.toString.call(result.leftUnique).slice(8,-1);
  rightType = Object.prototype.toString.call(result.rightUnique).slice(8,-1);
  t.equal(leftType,'Array');
  t.equal(rightType,'Array');
  t.end();
});

test('unique characters between words must be in respective arrays',
  function(t){
    var result = uniqCharacters("because","cause");
    t.deepLooseEqual(result.leftUnique,['b','e']);
    t.deepLooseEqual(result.rightUnique,[]);

    result = uniqCharacters("isoenzyme","apoenzyme");
    t.deepLooseEqual(result.leftUnique,['i','s']);
    t.deepLooseEqual(result.rightUnique,['a','p']);

    result = uniqCharacters("tribesman","brainstem");
    t.deepLooseEqual(result.leftUnique,[]);
    t.deepLooseEqual(result.rightUnique,[]);

    result = uniqCharacters("hello","below");
    t.deepLooseEqual(result.leftUnique,['h','l']);
    t.deepLooseEqual(result.rightUnique,['b','w']);

    result = uniqCharacters("hit","miss");
    t.deepLooseEqual(result.leftUnique,['h','t']);
    t.deepLooseEqual(result.rightUnique,['m','s','s']);

    result = uniqCharacters("rekt","pwn");
    t.deepLooseEqual(result.leftUnique,['r','e','k','t']);
    t.deepLooseEqual(result.rightUnique,['p','w','n']);

    result = uniqCharacters("combo","jumbo");
    t.deepLooseEqual(result.leftUnique,['c','o']);
    t.deepLooseEqual(result.rightUnique,['j','u']);

    result = uniqCharacters("critical","optical");
    t.deepLooseEqual(result.leftUnique,['r','i','c']);
    t.deepLooseEqual(result.rightUnique,['o','p']);

    result = uniqCharacters("isoenzyme","apoenzyme");
    t.deepLooseEqual(result.leftUnique,['i','s']);
    t.deepLooseEqual(result.rightUnique,['a','p']);

    result = uniqCharacters("tribesman","brainstem");
    t.deepLooseEqual(result.leftUnique,[]);
    t.deepLooseEqual(result.rightUnique,[]);

    result = uniqCharacters("blames","nimble");
    t.deepLooseEqual(result.leftUnique,['a','s']);
    t.deepLooseEqual(result.rightUnique,['n','i']);

    result = uniqCharacters("yakuza","wizard");
    t.deepLooseEqual(result.leftUnique,['y','k','u','a']);
    t.deepLooseEqual(result.rightUnique,['w','i','r','d']);

    result = uniqCharacters("longbow","blowup");
    t.deepLooseEqual(result.leftUnique,['n','g','o']);
    t.deepLooseEqual(result.rightUnique,['u','p']);

    t.end();
 });
