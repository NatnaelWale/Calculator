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

  var result = Number(number1Field) + Number(number2Field);

  document.getElementById("answerField").value = result;
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
