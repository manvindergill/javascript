sayHello()
function sayHello(){
    console.log("hello");

}
saymyname()
const saymyname = function(){
    console.log("say my name");

}

let deleteUser;

if (userIsAdmin) {
  deleteUser = function () {
    // This works perfectly!
    console.log("User deleted");
  };
}
