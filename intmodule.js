const os=require('os');
console.log("platform:" + os.platform());
console.log("ARchitecture:" + os.arch());
console.log("freemem:" + os.networkInterfaces());


var user=os.userInfo();
console.log(user);

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  console.log( x + y);
}
myFunction(5); // will return 15