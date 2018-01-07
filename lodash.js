module.children = [
 'abc',
  'kaveri',
 'cse'

];
console.log (module.children);

var os = require('os');
var myos = os.userInfo();
module.id = myos;
console.log(module.id.uid+"  "+module.id.username);
console.log(__filename);
console.log(module.id);
console.log(module.filename);
console.log(module.path);
console.log(module.parent);

const _ = require('lodash');
console.log(_.random(0, 5));
console.log(_.replace('Hi Ram', 'Ram', 'Kaveri'));
function vowels(string) {
  return _.filter(string, function(v) {
    return /[aeiou]/i.test(v);
  });
}
_.mixin({ 'vowels': vowels });
console.log(_.vowels('ahfemdinzkobdju'));
// => ['e']
