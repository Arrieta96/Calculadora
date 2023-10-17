
var a;
var b;
var calculate;

function init() {

    // variables
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var addition = document.getElementById("addition");
    var subtraction = document.getElementById("subtraction");
    var multiplication = document.getElementById("multiplication");
    var division = document.getElementById("division");
    var equal = document.getElementById("equal");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    var zero = document.getElementById("zero");
    

    //Events
    one.onclick = function(e) {
        result.textContent = result.textContent + "1"
    }
    two.onclick = function(e) {
        result.textContent = result.textContent + "2"
    }
    three.onclick = function(e) {
        result.textContent = result.textContent + "3"
    }
    four.onclick = function(e) {
        result.textContent = result.textContent + "4"
    }
    five.onclick = function(e) {
        result.textContent = result.textContent + "5"
    }
    six.onclick = function(e) {
        result.textContent = result.textContent + "6"
    }
    seven.onclick = function(e) {
        result.textContent = result.textContent + "7"
    }
    eight.onclick = function(e) {
        result.textContent = result.textContent + "8"
    }
    nine.onclick = function(e) {
        result.textContent = result.textContent + "9"
    }
    zero.onclick = function(e) {
        result.textContent = result.textContent + "0"
    }
    equal.onclick = function(e) {
        result.textContent = result.textContent + "0"
    }

    reset.onclick = function(e) {
        restart();
    }


    // addition
    addition.onclick = function(e) {
        a = result.textContent;
        calculate = "+";
        clear();
    }

    // subtraction
    subtraction.onclick = function(e) {
        a = result.textContent;
        calculate = "-";
        clear();
    }

    // multiplication
    multiplication.onclick = function(e) {
        a = result.textContent;
        calculate = "*";
        clear();
    }

    // division
    division.onclick = function(e) {
        a = result.textContent;
        calculate = "/";
        clear();
    }

    // equal
    equal.onclick = function(e) {
        b = result.textContent;
        solve();
    }

}

function clear() {
    result.textContent = "";
}

function restart() {
    result.textContent= "";
    a = 0;
    b = 0;
    calculate = "";
}

function solve() {
    var answer = 0;
    switch (calculate) {
        case "+":
            answer = parseFloat(a) + parseFloat(b);
            break;
            case "-":
            answer = parseFloat(a) - parseFloat(b);
            break;
            case "*":
            answer = parseFloat(a) * parseFloat(b);
            break;
            case "/":
            answer = parseFloat(a) / parseFloat(b);
            break;
    }
    restart();
    result.textContent = answer;
}

