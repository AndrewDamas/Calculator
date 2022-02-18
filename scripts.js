let equation = null;
let equationdisplay = document.getElementById("answer");
let answer = 0;
let displaying = equationdisplay;

function numberOne() {
    if (displaying === equationdisplay && equation === null) {
        answer = "1";
        equation = "1";
        equationdisplay.innerHTML = "1";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "1";
        equation = equation + "1"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "1";
        answer = "1";
        displaying = equationdisplay;
    }
}

function numberTwo() {
    if (displaying === equationdisplay && equation === null) {
        answer = "2";
        equation = "2";
        equationdisplay.innerHTML = "2";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "2";
        equation = equation + "2"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "2";
        answer = "2";
        displaying = equationdisplay;
    }
}

function numberThree() {
    if (displaying === equationdisplay && equation === null) {
        answer = "3";
        equation = "3";
        equationdisplay.innerHTML = "3";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "3";
        equation = equation + "3"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "3";
        answer = "3";
        displaying = equationdisplay;
    }
}

function numberFour() {
    if (displaying === equationdisplay && equation === null) {
        answer = "4";
        equation = "4";
        equationdisplay.innerHTML = "4";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "4";
        equation = equation + "4"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "4";
        answer = "4";
        displaying = equationdisplay;
    }
}

function numberFive() {
    if (displaying === equationdisplay && equation === null) {
        answer = "5";
        equation = "5";
        equationdisplay.innerHTML = "5";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "5";
        equation = equation + "5"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "5";
        answer = "5";
        displaying = equationdisplay;
    }
}

function numberSix() {
    if (displaying === equationdisplay && equation === null) {
        answer = "6";
        equation = "6";
        equationdisplay.innerHTML = "6";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "6";
        equation = equation + "6"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "6";
        answer = "6";
        displaying = equationdisplay;
    }
}

function numberSeven() {
    if (displaying === equationdisplay && equation === null) {
        answer = "7";
        equation = "7";
        equationdisplay.innerHTML = "7";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "7";
        equation = equation + "7"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "7";
        answer = "7";
        displaying = equationdisplay;
    }
}

function numberEight() {
    if (displaying === equationdisplay && equation === null) {
        answer = "8";
        equation = "8";
        equationdisplay.innerHTML = "8";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "8";
        equation = equation + "8"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "8";
        answer = "8";
        displaying = equationdisplay;
    }
}

function numberNine() {
    if (displaying === equationdisplay && equation === null) {
        answer = "9";
        equation = "9";
        equationdisplay.innerHTML = "9";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "9";
        equation = equation + "9"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "9";
        answer = "9";
        displaying = equationdisplay;
    }
}

function numberPlus() {
    if (displaying === equationdisplay && equation === null) {
        answer = "";
        equation = null;
        equationdisplay.innerHTML = "";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "+";
        equation = equation + "+"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "+";
        answer = "+";
        displaying = equationdisplay;
    }
}

function numberMinus() {
    if (displaying === equationdisplay && equation === null) {
        answer = "";
        equation = null;
        equationdisplay.innerHTML = "";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "-";
        equation = equation + "-"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "-";
        answer = "-";
        displaying = equationdisplay;
    }
}

function numberMultiply() {
    if (displaying === equationdisplay && equation === null) {
        answer = "";
        equation = null;
        equationdisplay.innerHTML = "";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "*";
        equation = equation + "*"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "*";
        answer = "*";
        displaying = equationdisplay;
    }
}

function numberDivide() {
    if (displaying === equationdisplay && equation === null) {
        answer = "";
        equation = null;
        equationdisplay.innerHTML = "";
    } else if (displaying === equationdisplay && equation !== null) {
        answer = answer + "/";
        equation = equation + "/"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "/";
        answer = "/";
        displaying = equationdisplay;
    }
}

function Clear() {
    answer = 0;
    equation = null;
    equationdisplay.innerHTML = "";
}

function Equal() {
    answer = eval(answer);
    equation = null;
    equationdisplay.innerHTML = answer;
    if (answer > 999999999999) {
        equationdisplay.innerHTML = "ERROR";
    }
}