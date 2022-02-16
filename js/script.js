document.getElementById("calculate-btn").addEventListener("click", function () {
  // select input id
  const inputFood = document.getElementById("inputFood");
  const inputRent = document.getElementById("inputRent");
  const inputClothes = document.getElementById("inputClothes");
  // get input value & convert to a float value
  const foodvalue = parseFloat(inputFood.value);
  const rentValue = parseFloat(inputRent.value);
  const clothesValue = parseFloat(inputClothes.value);
  // check condition
  if (
    inputFood.value == "" ||
    inputRent.value == "" ||
    inputClothes.value == ""
  ) {
    console.log("Enter a value");
  } else if (foodvalue < 0 || rentValue < 0 || clothesValue < 0) {
    console.log("Enter a positive value");
  } else {
    const total = foodvalue + rentValue + clothesValue;
    console.log(total);
  }
  // clear input
  inputFood.value = "";
  inputRent.value = "";
  inputClothes.value = "";
});
