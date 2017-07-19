function sayHi(name) {
    console.log("Hey, " + name + "!");
}
function sayBye(name) {
    console.log("Bye, " + name + "!");
}


module.exports.sayHi = sayHi;
module.exports.sayBye = sayBye;



//module.exports = {
//    sayHi: sayHi,
//    sayBye: sayBye
//}