const disOne = document.getElementById("display-one");
// disOne.innerText = "1111";
const disTwo = document.getElementById("display-two");
// disTwo.innerText = "2222";


// let calculation;
// let two = document.getElementById("two");

let store = "";
function one(){
  store += "1";
  disOne.innerText = store;
}
function two(){
  store += "2";
  disOne.innerText = store;
}
function three(){
  store += "3";
  disOne.innerText = store;
}
function four(){
  store += "4";
  disOne.innerText = store;
}
function five(){
  store += "5";
  disOne.innerText = store;
}
function six(){
  store += "6";
  disOne.innerText = store;
}
function seven(){
  store += "7";
  disOne.innerText = store;
}
function eight(){
  store += "8";
  disOne.innerText = store;
}
function nine(){
  store += "9";
  disOne.innerText = store;
}
function zero(){
  store += "0";
  disOne.innerText = store;
}
function star(){
  store += "*";
  disOne.innerText = store;
}
function hash(){
  store += "#";
  disOne.innerText = store;
}

function send(){
  disTwo.innerText = store;
}

function reset(){
  disOne.innerText = "";
  store = "";
}
