const selectOne = document.getElementById("typeOne");
const selectTwo = document.getElementById("typeTwo");
const readOnlyTextBox = document.getElementById("result");
const userInputValue = document.getElementById("valueToConvert");

userInputValue.onchange = function () {
  let value = userInputValue.value;
  readOnlyTextBox.innerHTML = ConvertOperation(value);
};

selectOne.onchange = function () {
  let value = userInputValue.value;
  readOnlyTextBox.innerHTML = ConvertOperation(value);
};

selectTwo.onchange = function () {
  let value = userInputValue.value;
  readOnlyTextBox.innerHTML = ConvertOperation(value);
};

function ConvertOperation(convertionValue) {
  let result = 0;

  if (selectOne.value == "C" && selectTwo.value == "F") {
    result = convertionValue * (9 / 5) + 32;
  }

  if (selectOne.value == "C" && selectTwo.value == "K") {
    result = convertionValue * 273.15;
  }

  if (selectOne.value == "F" && selectTwo.value == "C") {
    result = (convertionValue - 32) * (5 / 9);
  }

  if (selectOne.value == "F" && selectTwo.value == "K") {
    result = (convertionValue - 32) * (5 / 9) + 273.15;
  }

  if (selectOne.value == "K" && selectTwo.value == "C") {
    result = convertionValue - 273.15;
  }

  if (selectOne.value == "K" && selectTwo.value == "F") {
    result = (convertionValue - 273.15) * (9 / 5) + 32;
  }

  return result;
}
