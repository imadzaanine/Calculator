let displayed = document.getElementsByClassName("display")[0]
const zero = document.getElementsByClassName("zero")[0]
const one = document.getElementsByClassName("one")[0]
const two = document.getElementsByClassName("two")[0]
const three = document.getElementsByClassName("three")[0]
const four = document.getElementsByClassName("four")[0]
const five = document.getElementsByClassName("five")[0]
const six = document.getElementsByClassName("six")[0]
const seven = document.getElementsByClassName("seven")[0]
const eight = document.getElementsByClassName("eight")[0]
const nine = document.getElementsByClassName("nine")[0]
const addButton = document.getElementsByClassName("add")[0]
const subButton = document.getElementsByClassName("sub")[0]
const multiButton = document.getElementsByClassName("multi")[0]


function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b
}
function multi(a,b){
    return a*b;
}
function dev(a,b){
    while (a!=0 && b!=0) {
        return a/b;
    }
}

function display(number){
    displayed.innerHTML = displayed.innerHTML + number;
}

zero.onclick = function(){display(this.innerHTML)};
one.onclick = function(){display(this.innerHTML)};
two.onclick = function(){display(this.innerHTML)};
three.onclick = function(){display(this.innerHTML)};
four.onclick = function(){display(this.innerHTML)};
five.onclick = function(){display(this.innerHTML)};
six.onclick = function(){display(this.innerHTML)};
seven.onclick = function(){display(this.innerHTML)};
eight.onclick = function(){display(this.innerHTML)};
nine.onclick = function(){display(this.innerHTML)};


