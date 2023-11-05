let result = document.getElementById("res");

let currentValue = "";
let pendingFunction = null;
let pendingValue = 0;

const numbers = document.getElementById("nums");
numbers.querySelectorAll("button").forEach(function(button) {
  button.addEventListener("click", function () {
    if (result !== "0") {
      result.innerHTML += button.innerHTML
    }else{
      result.innerHTML = button.innerHTML
    }
  })
});

function pending() {
    currentValue =  pendingFunction(pendingValue , Number(result.innerHTML));
    pendingFunction = null ;
    pendingValue = 0
}

function updateresult() {
  result.innerHTML = currentValue
}

function add(a,b) {
  return a+b
}
function sub(a,b) {
  return a-b
}
function mult(a,b) {
  return a*b
}
function dev(a,b) {
  if (b !== 0) {
    return a/b
  } else {
    return "Error"
  }
}

document.getElementById("add").addEventListener("click", function () {
  if (pendingFunction == null) {
    pendingValue = Number(result.innerHTML);
    pendingFunction = add; 
    currentValue = "";
    updateresult();
  } else {
    pending();
    updateresult();
  }
});