let equation = null;
let equationdisplay = document.getElementById("answer");
let answer = 0;
let displaying = equationdisplay;

function numberZero() {
    if (displaying === equationdisplay && equation === null) {
        answer = "0";
        equation = "0";
        equationdisplay.innerHTML = "0";
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "0";
        equation = equation + "0";
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "0";
        answer = "0";
        displaying = equationdisplay;
    }
}

function numberOne() {
    if (displaying === equationdisplay && equation === null) {
        answer = "1";
        equation = "1";
        equationdisplay.innerHTML = "1";
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "1";
        equation = equation + "1";
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
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "2";
        equation = equation + "2";
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
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "3";
        equation = equation + "3";
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
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "4";
        equation = equation + "4";
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
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "5";
        equation = equation + "5";
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
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "6";
        equation = equation + "6";
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
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "7";
        equation = equation + "7";
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
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "8";
        equation = equation + "8";
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
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "9";
        equation = equation + "9";
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "9";
        answer = "9";
        displaying = equationdisplay;
    }
}

function Decimal() {
    if (displaying === equationdisplay && equation === null) {
        answer = ".";
        equation = ".";
        equationdisplay.innerHTML = ".";
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + ".";
        equation = equation + "."
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = ".";
        answer = ".";
        displaying = equationdisplay;
    }
}

function Negative() {
    if (displaying === equationdisplay && equation === null) {
        answer = "-";
        equation = "-";
        equationdisplay.innerHTML = "-";
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "-";
        equation = equation + "-"
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "-";
        answer = "-";
        displaying = equationdisplay;
    }
}

function numberPlus() {
    if (displaying === equationdisplay && equation === null) {
        answer = "";
        equation = null;
        equationdisplay.innerHTML = "";
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "+";
        equation = equation + "+";
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "+";
        answer = answer + "+";
        displaying = equationdisplay;
        equation = answer + "+";
    }
}

function numberMinus() {
    if (displaying === equationdisplay && equation === null) {
        answer = "";
        equation = null;
        equationdisplay.innerHTML = "";
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "-";
        equation = equation + "-";
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "-";
        answer = answer + "-";
        displaying = equationdisplay;
        equation = answer + "-";
    }
}

function numberMultiply() {
    if (displaying === equationdisplay && equation === null) {
        answer = "";
        equation = null;
        equationdisplay.innerHTML = "";
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "*";
        equation = equation + "*";
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "*";
        answer = answer + "*";
        displaying = equationdisplay;
        equation = answer + "*";
    }
}

function numberDivide() {
    if (displaying === equationdisplay && equation === null) {
        answer = "";
        equation = null;
        equationdisplay.innerHTML = "";
    } else if (displaying === equationdisplay && equation !== null && equationdisplay.innerHTML.length < 12) {
        answer = answer + "/";
        equation = equation + "/";
        equationdisplay.innerHTML = equation;
    } else if (displaying === answer) {
        document.getElementById("answer").innerHTML = "/";
        answer = answer + "/";
        displaying = equationdisplay;
        equation = answer + "/";
    }
}

function Clear() {
    answer = 0;
    equation = null;
    equationdisplay.innerHTML = "";
    displaying = equationdisplay;
}

function Equal() {
    answer = eval(answer);
    equation = null;
    equationdisplay.innerHTML = answer;
    displaying = answer;
    if (answer > 999999999999) {
        equationdisplay.innerHTML = "ERROR";
        displaying = equationdisplay;
        answer = 0;
    }
}



function changeBackgroundOriginal() {
    document.body.style.backgroundColor = "rgba(165, 103, 61, 0.685)";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "black";
    document.getElementById("invisible").style.borderColor = "black";
}

function changeBackgroundBlack() {
    document.body.style.backgroundColor = "black";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "white";
    document.getElementById("invisible").style.borderColor = "white";
}

function changeBackgroundWhite() {
    document.body.style.backgroundColor = "white";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "black";
    document.getElementById("invisible").style.borderColor = "black";
}

function changeBackgroundRed() {
    document.body.style.backgroundColor = "red";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "black";
    document.getElementById("invisible").style.borderColor = "black";
}

function changeBackgroundOrange() {
    document.body.style.backgroundColor = "orange";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "black";
    document.getElementById("invisible").style.borderColor = "black";
}

function changeBackgroundYellow() {
    document.body.style.backgroundColor = "rgb(244, 244, 10)";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "black";
    document.getElementById("invisible").style.borderColor = "black";
}

function changeBackgroundGreen() {
    document.body.style.backgroundColor = "green";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "black";
    document.getElementById("invisible").style.borderColor = "black";
}

function changeBackgroundBlue() {
    document.body.style.backgroundColor = "blue";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "black";
    document.getElementById("invisible").style.borderColor = "black";
}

function changeBackgroundPurple() {
    document.body.style.backgroundColor = "purple";
    if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px white";
    } else {
        document.getElementById("calculator").style.boxShadow = "0px 3px 10px 0px black";
    }
    document.getElementById("invisible").style.color = "black";
    document.getElementById("invisible").style.borderColor = "black";
}



function changeOutsideBrown() {
    document.getElementById("calculator").style.backgroundColor = "rgb(120, 78, 6)";
    document.getElementById("answer").style.borderColor = "rgba(62, 40, 3, 0.795)";
}

function changeOutsideBlack() {
    document.getElementById("calculator").style.backgroundColor = "black";
    document.getElementById("answer").style.borderColor = "rgba(0,0,0,0.795)";
}

function changeOutsideWhite() {
    document.getElementById("calculator").style.backgroundColor = "white";
    document.getElementById("answer").style.borderColor = "rgba(255,255,255,0.795)";
}

function changeOutsideRed() {
    document.getElementById("calculator").style.backgroundColor = "red";
    document.getElementById("answer").style.borderColor = "rgba(197,0,0,0.795)";
}

function changeOutsideOrange() {
    document.getElementById("calculator").style.backgroundColor = "orange";
    document.getElementById("answer").style.borderColor = "rgba(197,127,0,0.795)";
}

function changeOutsideYellow() {
    document.getElementById("calculator").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("answer").style.borderColor = "rgba(186,206,7,0.795)";
}

function changeOutsideGreen() {
    document.getElementById("calculator").style.backgroundColor = "green";
    document.getElementById("answer").style.borderColor = "rgba(0,90,0,0.795)";
}

function changeOutsideBlue() {
    document.getElementById("calculator").style.backgroundColor = "blue";
    document.getElementById("answer").style.borderColor = "rgba(0,0,222,0.795)";
}

function changeOutsidePurple() {
    document.getElementById("calculator").style.backgroundColor = "purple";
    document.getElementById("answer").style.borderColor = "rgba(70,0,125,0.795)";
}

function changeInsideYellow() {
    document.getElementById("numbers").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("numbers").style.borderColor ="rgba(107, 68, 6, 0.178)";
}

function changeInsideBlack() {
    document.getElementById("numbers").style.backgroundColor = "black";
    document.getElementById("numbers").style.borderColor ="rgba(255, 255, 255, 0.078)";
}

function changeInsideWhite() {
    document.getElementById("numbers").style.backgroundColor = "white";
    document.getElementById("numbers").style.borderColor ="rgba(0, 0, 0, 0.078)";
}

function changeInsideRed() {
    document.getElementById("numbers").style.backgroundColor = "red";
    document.getElementById("numbers").style.borderColor ="rgba(118, 0, 3, 0.178)";
}

function changeInsideOrange() {
    document.getElementById("numbers").style.backgroundColor = "orange";
    document.getElementById("numbers").style.borderColor ="rgba(118, 0, 9, 0.178)";
}

function changeInsideBrown() {
    document.getElementById("numbers").style.backgroundColor = "rgb(120, 78, 6)";
    document.getElementById("numbers").style.borderColor ="rgba(0, 0, 9, 0.178)";
}

function changeInsideGreen() {
    document.getElementById("numbers").style.backgroundColor = "green";
    document.getElementById("numbers").style.borderColor ="rgba(0, 0, 3, 0.178)";
}

function changeInsideBlue() {
    document.getElementById("numbers").style.backgroundColor = "blue";
    document.getElementById("numbers").style.borderColor ="rgba(0, 0, 180, 0.178)";
}

function changeInsidePurple() {
    document.getElementById("numbers").style.backgroundColor = "purple";
    document.getElementById("numbers").style.borderColor ="rgba(0, 0, 131, 0.178)";
}

//IS IT POSSIBLE TO HAVE MULTIPLE VALUES ASSIGNED TO ONE VARIABLE???
/* let allnumbers = document.getElementById("one"); document.getElementById("two"); document.getElementById("three"); document.getElementById("four"); document.getElementById("five"); document.getElementById("six"); document.getElementById("seven"); document.getElementById("eight"); document.getElementById("nine"); document.getElementById("plus"); document.getElementById("minus"); document.getElementById("multiply"); document.getElementById("zero"); document.getElementById("decimal"); document.getElementById("negative"); document.getElementById("divide"); document.getElementById("clear"); document.getElementById("equal");

function changeNumberOriginal() {
    allnumbers.style.backgroundColor = "rgb(193, 170, 130)";
    allnumbers.style.color = "rgba(0, 0, 0, 0.822)";
    allnumbers.style.borderColor = "rgba(102, 102, 5, 0.226)";
}

//IS IT POSSIBLE TO CHANGE THE STYLE OF "allofthenumbers"???
const allofthenumbers = {
    numberone: document.getElementById("one"),
    numbertwo: document.getElementById("two"),
    numbertwo: document.getElementById("three"),
}
} */


function changeNumberOriginal() {
    document.getElementById("one").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("two").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("three").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("four").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("five").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("six").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("seven").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("eight").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("nine").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("zero").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("decimal").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("negative").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("clear").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("equal").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("plus").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("minus").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("multiply").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(102, 102, 5, 0.226)";
    document.getElementById("divide").style.backgroundColor = "rgb(193, 170, 130)";
    document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(102, 102, 5, 0.226)";
}

//NEED TO FIGURE OUT A WAY TO MAKE THIS SMALLER
/* function changeNumberBlack() {
    document.getElementById("one").style.backgroundColor = "black";
    document.getElementById("one").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("two").style.backgroundColor = "black";
    document.getElementById("two").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("three").style.backgroundColor = "black";
    document.getElementById("three").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("four").style.backgroundColor = "black";
    document.getElementById("four").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("five").style.backgroundColor = "black";
    document.getElementById("five").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("six").style.backgroundColor = "black";
    document.getElementById("six").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("seven").style.backgroundColor = "black";
    document.getElementById("seven").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("eight").style.backgroundColor = "black";
    document.getElementById("eight").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("nine").style.backgroundColor = "black";
    document.getElementById("nine").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("zero").style.backgroundColor = "black";
    document.getElementById("zero").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("plus").style.backgroundColor = "black";
    document.getElementById("plus").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("minus").style.backgroundColor = "black";
    document.getElementById("minus").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("multiply").style.backgroundColor = "black";
    document.getElementById("multiply").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("decimal").style.backgroundColor = "black";
    document.getElementById("decimal").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("negative").style.backgroundColor = "black";
    document.getElementById("negative").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("divide").style.backgroundColor = "black";
    document.getElementById("divide").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("clear").style.backgroundColor = "black";
    document.getElementById("clear").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(255, 255, 255, 0.078)";
    document.getElementById("equal").style.backgroundColor = "black";
    document.getElementById("equal").style.color = "rgba(250, 250, 250, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(255, 255, 255, 0.078)";
} */

function changeNumberBlack() {
    //WHY DOES THIS NOT WORK???
    /* document.getElementsByClassName("digits").classlist.add("numberblack"); */
    document.getElementById("one").classList.toggle("numberblack");
    document.getElementById("two").classList.toggle("numberblack");
    document.getElementById("three").classList.toggle("numberblack");
    document.getElementById("four").classList.toggle("numberblack");
    document.getElementById("five").classList.toggle("numberblack");
    document.getElementById("six").classList.toggle("numberblack");
    document.getElementById("seven").classList.toggle("numberblack");
    document.getElementById("eight").classList.toggle("numberblack");
    document.getElementById("nine").classList.toggle("numberblack");
    document.getElementById("plus").classList.toggle("numberblack");
    document.getElementById("minus").classList.toggle("numberblack");
    document.getElementById("multiply").classList.toggle("numberblack");
    document.getElementById("zero").classList.toggle("numberblack");
    document.getElementById("decimal").classList.toggle("numberblack");
    document.getElementById("negative").classList.toggle("numberblack");
    document.getElementById("divide").classList.toggle("numberblack");
    document.getElementById("clear").classList.toggle("numberblack");
    document.getElementById("equal").classList.toggle("numberblack");
}

function changeNumberWhite() {
    //WHY DOES THIS NOT WORK???
    /* document.getElementsByClassName("digits").classlist.add("numberblack"); 
        OR
        document.getElementsByClassName("digits").classlist.add("numberblack");
    */
    document.getElementById("one").classList.toggle("numberblack");
    document.getElementById("two").classList.toggle("numberblack");
    document.getElementById("three").classList.toggle("numberblack");
    document.getElementById("four").classList.toggle("numberblack");
    document.getElementById("five").classList.toggle("numberblack");
    document.getElementById("six").classList.toggle("numberblack");
    document.getElementById("seven").classList.toggle("numberblack");
    document.getElementById("eight").classList.toggle("numberblack");
    document.getElementById("nine").classList.toggle("numberblack");
    document.getElementById("plus").classList.toggle("numberblack");
    document.getElementById("minus").classList.toggle("numberblack");
    document.getElementById("multiply").classList.toggle("numberblack");
    document.getElementById("zero").classList.toggle("numberblack");
    document.getElementById("decimal").classList.toggle("numberblack");
    document.getElementById("negative").classList.toggle("numberblack");
    document.getElementById("divide").classList.toggle("numberblack");
    document.getElementById("clear").classList.toggle("numberblack");
    document.getElementById("equal").classList.toggle("numberblack");
}

/* function changeNumberWhite() {
    document.getElementById("one").style.backgroundColor = "white";
    document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("two").style.backgroundColor = "white";
    document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("three").style.backgroundColor = "white";
    document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("four").style.backgroundColor = "white";
    document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("five").style.backgroundColor = "white";
    document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("six").style.backgroundColor = "white";
    document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("seven").style.backgroundColor = "white";
    document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("eight").style.backgroundColor = "white";
    document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("nine").style.backgroundColor = "white";
    document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("plus").style.backgroundColor = "white";
    document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("minus").style.backgroundColor = "white";
    document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("multiply").style.backgroundColor = "white";
    document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("zero").style.backgroundColor = "white";
    document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("decimal").style.backgroundColor = "white";
    document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("negative").style.backgroundColor = "white";
    document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("divide").style.backgroundColor = "white";
    document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("clear").style.backgroundColor = "white";
    document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(0, 0, 0, 0.078)";
    document.getElementById("equal").style.backgroundColor = "white";
    document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(0, 0, 0, 0.078)";
} 
*/

function changeNumberRed() {
    document.getElementById("one").style.backgroundColor = "red";
    document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("two").style.backgroundColor = "red";
    document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("three").style.backgroundColor = "red";
    document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("four").style.backgroundColor = "red";
    document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("five").style.backgroundColor = "red";
    document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("six").style.backgroundColor = "red";
    document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("seven").style.backgroundColor = "red";
    document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("eight").style.backgroundColor = "red";
    document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("nine").style.backgroundColor = "red";
    document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("plus").style.backgroundColor = "red";
    document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("minus").style.backgroundColor = "red";
    document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("multiply").style.backgroundColor = "red";
    document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("zero").style.backgroundColor = "red";
    document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("decimal").style.backgroundColor = "red";
    document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("negative").style.backgroundColor = "red";
    document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("divide").style.backgroundColor = "red";
    document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("clear").style.backgroundColor = "red";
    document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(151, 0, 0 .5)";
    document.getElementById("equal").style.backgroundColor = "red";
    document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(151, 0, 0 .5)";
}

function changeNumberOrange() {
    document.getElementById("one").style.backgroundColor = "orange";
    document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("two").style.backgroundColor = "orange";
    document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("three").style.backgroundColor = "orange";
    document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("four").style.backgroundColor = "orange";
    document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("five").style.backgroundColor = "orange";
    document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("six").style.backgroundColor = "orange";
    document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("seven").style.backgroundColor = "orange";
    document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("eight").style.backgroundColor = "orange";
    document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("nine").style.backgroundColor = "orange";
    document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("plus").style.backgroundColor = "orange";
    document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("minus").style.backgroundColor = "orange";
    document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("multiply").style.backgroundColor = "orange";
    document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("zero").style.backgroundColor = "orange";
    document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("decimal").style.backgroundColor = "orange";
    document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("negative").style.backgroundColor = "orange";
    document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("divide").style.backgroundColor = "orange";
    document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("clear").style.backgroundColor = "orange";
    document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(184, 97, 0, 0.226)";
    document.getElementById("equal").style.backgroundColor = "orange";
    document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(184, 97, 0, 0.226)";
}

function changeNumberYellow() {
    document.getElementById("one").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("two").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("three").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("four").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("five").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("six").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("seven").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("eight").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("nine").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("plus").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("minus").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("multiply").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("zero").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("decimal").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("negative").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("divide").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("clear").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(173, 176, 5, 0.226)";
    document.getElementById("equal").style.backgroundColor = "rgb(244, 244, 10)";
    document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(173, 176, 5, 0.226)";
}

function changeNumberGreen() {
    document.getElementById("one").style.backgroundColor = "green";
    document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("two").style.backgroundColor = "green";
    document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("three").style.backgroundColor = "green";
    document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("four").style.backgroundColor = "green";
    document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("five").style.backgroundColor = "green";
    document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("six").style.backgroundColor = "green";
    document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("seven").style.backgroundColor = "green";
    document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("eight").style.backgroundColor = "green";
    document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("nine").style.backgroundColor = "green";
    document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("plus").style.backgroundColor = "green";
    document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("minus").style.backgroundColor = "green";
    document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("multiply").style.backgroundColor = "green";
    document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("zero").style.backgroundColor = "green";
    document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("decimal").style.backgroundColor = "green";
    document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("negative").style.backgroundColor = "green";
    document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("divide").style.backgroundColor = "green";
    document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("clear").style.backgroundColor = "green";
    document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(0, 60, 0, 0.226)";
    document.getElementById("equal").style.backgroundColor = "green";
    document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(0, 60, 0, 0.226)";
}

function changeNumberBlue() {
    document.getElementById("one").style.backgroundColor = "blue";
    document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("two").style.backgroundColor = "blue";
    document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("three").style.backgroundColor = "blue";
    document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("four").style.backgroundColor = "blue";
    document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("five").style.backgroundColor = "blue";
    document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("six").style.backgroundColor = "blue";
    document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("seven").style.backgroundColor = "blue";
    document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("eight").style.backgroundColor = "blue";
    document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("nine").style.backgroundColor = "blue";
    document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("plus").style.backgroundColor = "blue";
    document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("minus").style.backgroundColor = "blue";
    document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("multiply").style.backgroundColor = "blue";
    document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("zero").style.backgroundColor = "blue";
    document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("decimal").style.backgroundColor = "blue";
    document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("negative").style.backgroundColor = "blue";
    document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("divide").style.backgroundColor = "blue";
    document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("clear").style.backgroundColor = "blue";
    document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(0, 0, 130, 0.226)";
    document.getElementById("equal").style.backgroundColor = "blue";
    document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(0, 0, 130, 0.226)";
}

function changeNumberPurple() {
    document.getElementById("one").style.backgroundColor = "purple";
    document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("one").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("two").style.backgroundColor = "purple";
    document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("two").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("three").style.backgroundColor = "purple";
    document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("three").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("four").style.backgroundColor = "purple";
    document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("four").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("five").style.backgroundColor = "purple";
    document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("five").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("six").style.backgroundColor = "purple";
    document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("six").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("seven").style.backgroundColor = "purple";
    document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("seven").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("eight").style.backgroundColor = "purple";
    document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("eight").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("nine").style.backgroundColor = "purple";
    document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("nine").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("plus").style.backgroundColor = "purple";
    document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("plus").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("minus").style.backgroundColor = "purple";
    document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("minus").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("multiply").style.backgroundColor = "purple";
    document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("multiply").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("zero").style.backgroundColor = "purple";
    document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("zero").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("decimal").style.backgroundColor = "purple";
    document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("decimal").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("negative").style.backgroundColor = "purple";
    document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("negative").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("divide").style.backgroundColor = "purple";
    document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("divide").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("clear").style.backgroundColor = "purple";
    document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("clear").style.borderColor = "rgba(57, 0, 3, 0.226)";
    document.getElementById("equal").style.backgroundColor = "purple";
    document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    document.getElementById("equal").style.borderColor = "rgba(57, 0, 3, 0.226)";
}

/* function makeInvisible() {
    if (document.body.style.backgroundColor !== "black") {
        document.getElementById("calculator").style.backgroundColor = "transparent";
        document.getElementById("calculator").style.boxShadow = "none";
        document.getElementById("calculator").style.border = "1px solid black";
        document.getElementById("answer").style.backgroundColor = "transparent";
        document.getElementById("answer").style.boxShadow = "none";
        document.getElementById("answer").style.border = "1px solid black";
        document.getElementById("numbers").style.backgroundColor = "transparent";
        document.getElementById("numbers").style.boxShadow = "none";
        document.getElementById("numbers").style.border = "1px solid black";
        document.getElementById("one").style.backgroundColor = "transparent";
        document.getElementById("one").style.boxShadow = "none";
        document.getElementById("one").style.border = "1px solid black";
        document.getElementById("one").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("two").style.backgroundColor = "transparent";
        document.getElementById("two").style.boxShadow = "none";
        document.getElementById("two").style.border = "1px solid black";
        document.getElementById("two").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("three").style.backgroundColor = "transparent";
        document.getElementById("three").style.boxShadow = "none";
        document.getElementById("three").style.border = "1px solid black";
        document.getElementById("three").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("four").style.backgroundColor = "transparent";
        document.getElementById("four").style.boxShadow = "none";
        document.getElementById("four").style.border = "1px solid black";
        document.getElementById("four").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("five").style.backgroundColor = "transparent";
        document.getElementById("five").style.boxShadow = "none";
        document.getElementById("five").style.border = "1px solid black";
        document.getElementById("five").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("six").style.backgroundColor = "transparent";
        document.getElementById("six").style.boxShadow = "none";
        document.getElementById("six").style.border = "1px solid black";
        document.getElementById("six").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("seven").style.backgroundColor = "transparent";
        document.getElementById("seven").style.boxShadow = "none";
        document.getElementById("seven").style.border = "1px solid black";
        document.getElementById("seven").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("eight").style.backgroundColor = "transparent";
        document.getElementById("eight").style.boxShadow = "none";
        document.getElementById("eight").style.border = "1px solid black";
        document.getElementById("eight").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("nine").style.backgroundColor = "transparent";
        document.getElementById("nine").style.boxShadow = "none";
        document.getElementById("nine").style.border = "1px solid black";
        document.getElementById("nine").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("plus").style.backgroundColor = "transparent";
        document.getElementById("plus").style.boxShadow = "none";
        document.getElementById("plus").style.border = "1px solid black";
        document.getElementById("plus").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("minus").style.backgroundColor = "transparent";
        document.getElementById("minus").style.boxShadow = "none";
        document.getElementById("minus").style.border = "1px solid black";
        document.getElementById("minus").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("multiply").style.backgroundColor = "transparent";
        document.getElementById("multiply").style.boxShadow = "none";
        document.getElementById("multiply").style.border = "1px solid black";
        document.getElementById("multiply").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("zero").style.backgroundColor = "transparent";
        document.getElementById("zero").style.boxShadow = "none";
        document.getElementById("zero").style.border = "1px solid black";
        document.getElementById("zero").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("decimal").style.backgroundColor = "transparent";
        document.getElementById("decimal").style.boxShadow = "none";
        document.getElementById("decimal").style.border = "1px solid black";
        document.getElementById("decimal").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("negative").style.backgroundColor = "transparent";
        document.getElementById("negative").style.boxShadow = "none";
        document.getElementById("negative").style.border = "1px solid black";
        document.getElementById("negative").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("divide").style.backgroundColor = "transparent";
        document.getElementById("divide").style.boxShadow = "none";
        document.getElementById("divide").style.border = "1px solid black";
        document.getElementById("divide").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("clear").style.backgroundColor = "transparent";
        document.getElementById("clear").style.boxShadow = "none";
        document.getElementById("clear").style.border = "1px solid black";
        document.getElementById("clear").style.color = "rgba(0, 0, 0, 0.822)";
        document.getElementById("equal").style.backgroundColor = "transparent";
        document.getElementById("equal").style.boxShadow = "none";
        document.getElementById("equal").style.border = "1px solid black";
        document.getElementById("equal").style.color = "rgba(0, 0, 0, 0.822)";
    } else if (document.body.style.backgroundColor === "black") {
        document.getElementById("calculator").style.backgroundColor = "transparent";
        document.getElementById("calculator").style.boxShadow = "none";
        document.getElementById("calculator").style.border = "1px solid white";
        document.getElementById("answer").style.backgroundColor = "transparent";
        document.getElementById("answer").style.boxShadow = "none";
        document.getElementById("answer").style.border = "1px solid white";
        document.getElementById("numbers").style.backgroundColor = "transparent";
        document.getElementById("numbers").style.boxShadow = "none";
        document.getElementById("numbers").style.border = "1px solid white";
        document.getElementById("one").style.backgroundColor = "transparent";
        document.getElementById("one").style.boxShadow = "none";
        document.getElementById("one").style.border = "1px solid white";
        document.getElementById("one").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("two").style.backgroundColor = "transparent";
        document.getElementById("two").style.boxShadow = "none";
        document.getElementById("two").style.border = "1px solid white";
        document.getElementById("two").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("three").style.backgroundColor = "transparent";
        document.getElementById("three").style.boxShadow = "none";
        document.getElementById("three").style.border = "1px solid white";
        document.getElementById("three").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("four").style.backgroundColor = "transparent";
        document.getElementById("four").style.boxShadow = "none";
        document.getElementById("four").style.border = "1px solid white";
        document.getElementById("four").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("five").style.backgroundColor = "transparent";
        document.getElementById("five").style.boxShadow = "none";
        document.getElementById("five").style.border = "1px solid white";
        document.getElementById("five").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("six").style.backgroundColor = "transparent";
        document.getElementById("six").style.boxShadow = "none";
        document.getElementById("six").style.border = "1px solid white";
        document.getElementById("six").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("seven").style.backgroundColor = "transparent";
        document.getElementById("seven").style.boxShadow = "none";
        document.getElementById("seven").style.border = "1px solid white";
        document.getElementById("seven").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("eight").style.backgroundColor = "transparent";
        document.getElementById("eight").style.boxShadow = "none";
        document.getElementById("eight").style.border = "1px solid white";
        document.getElementById("eight").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("nine").style.backgroundColor = "transparent";
        document.getElementById("nine").style.boxShadow = "none";
        document.getElementById("nine").style.border = "1px solid white";
        document.getElementById("nine").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("plus").style.backgroundColor = "transparent";
        document.getElementById("plus").style.boxShadow = "none";
        document.getElementById("plus").style.border = "1px solid white";
        document.getElementById("plus").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("minus").style.backgroundColor = "transparent";
        document.getElementById("minus").style.boxShadow = "none";
        document.getElementById("minus").style.border = "1px solid white";
        document.getElementById("minus").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("multiply").style.backgroundColor = "transparent";
        document.getElementById("multiply").style.boxShadow = "none";
        document.getElementById("multiply").style.border = "1px solid white";
        document.getElementById("multiply").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("zero").style.backgroundColor = "transparent";
        document.getElementById("zero").style.boxShadow = "none";
        document.getElementById("zero").style.border = "1px solid white";
        document.getElementById("zero").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("decimal").style.backgroundColor = "transparent";
        document.getElementById("decimal").style.boxShadow = "none";
        document.getElementById("decimal").style.border = "1px solid white";
        document.getElementById("decimal").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("negative").style.backgroundColor = "transparent";
        document.getElementById("negative").style.boxShadow = "none";
        document.getElementById("negative").style.border = "1px solid white";
        document.getElementById("negative").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("divide").style.backgroundColor = "transparent";
        document.getElementById("divide").style.boxShadow = "none";
        document.getElementById("divide").style.border = "1px solid white";
        document.getElementById("divide").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("clear").style.backgroundColor = "transparent";
        document.getElementById("clear").style.boxShadow = "none";
        document.getElementById("clear").style.border = "1px solid white";
        document.getElementById("clear").style.color = "rgba(255, 255, 255, 0.822)";
        document.getElementById("equal").style.backgroundColor = "transparent";
        document.getElementById("equal").style.boxShadow = "none";
        document.getElementById("equal").style.border = "1px solid white";
        document.getElementById("equal").style.color = "rgba(255, 255, 255, 0.822)";
    }
} */