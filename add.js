const mymodule=require('./addmodule')
const _=require('lodash');


var x=([1,2,3,4,4,4,4,4,5,5,5,3,3,3,3])
var myarray=_.uniq(x)
console.log(myarray);
