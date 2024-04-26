"use strict";

window.onload = init;

function init() {
  const onAddBtnClicked = document.getElementById("addBtn");

  onAddBtnClicked.onclick = addOnClick;

  const onSubtractBtnClicked = document.getElementById("subtractBtn");

  onSubtractBtnClicked.onclick = subtractOnClick;

  const onMultiplyBtnClicked = document.getElementById("multiplyBtn");

  onMultiplyBtnClicked.onclick = multiplyOnClick;

  const onDivideBtnClicked = document.getElementById("divideBtn");

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
