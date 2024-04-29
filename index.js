"use strict";

const onAddBtnClicked = document.getElementById("addBtn");
const onSubtractBtnClicked = document.getElementById("subtractBtn");
const onMultiplyBtnClicked = document.getElementById("multiplyBtn");
const onDivideBtnClicked = document.getElementById("divideBtn");

window.onload = init;

function init() {
  onAddBtnClicked.onclick = addOnClick;
  onSubtractBtnClicked.onclick = subtractOnClick;
  onMultiplyBtnClicked.onclick = multiplyOnClick;
  onDivideBtnClicked.onclick = divideOnClick;
}

function addOnClick() {
  var number1Field = document.getElementById("number1Field").value;
  var number2Field = document.getElementById("number2Field").value;

  if (isNaN(number1Field) || isNaN(number2Field)) {
    document.getElementById("answerField").value = "";
    document.getElementById("messagePara").innerHTML = 
    "One or more of your input values are invalid";
    return; // exit the addBtnClicked function
    }

  var result = Number(number1Field) + Number(number2Field);

  document.getElementById("answerField").value = result;

  document.getElementById("messagePara").innerHTML = "";
}

function subtractOnClick() {
  var number1Field = document.getElementById("number1Field").value;
  var number2Field = document.getElementById("number2Field").value;
  var result = Number(number1Field) - Number(number2Field);

  document.getElementById("answerField").value = result;
}

function multiplyOnClick() {
  var number1Field = document.getElementById("number1Field").value;
  var number2Field = document.getElementById("number2Field").value;
  var result = Number(number1Field) * Number(number2Field);

  document.getElementById("answerField").value = result;
}

function divideOnClick() {
  var number1Field = document.getElementById("number1Field").value;
  var number2Field = document.getElementById("number2Field").value;
  var result = Number(number1Field) / Number(number2Field);

  document.getElementById("answerField").value = result;
}
