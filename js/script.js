document.getElementById("calculate-btn").addEventListener("click", function () {
  // select input value
  const inputIncome = document.getElementById("inputIncome").value;
  const inputFood = document.getElementById("inputFood").value;
  const inputRent = document.getElementById("inputRent").value;
  const inputClothes = document.getElementById("inputClothes").value;
  // get input value & convert to a float value
  const incomeValue = parseFloat(inputIncome);
  const foodvalue = parseFloat(inputFood);
  const rentValue = parseFloat(inputRent);
  const clothesValue = parseFloat(inputClothes);
  // check condition
  if (
    inputIncome == "" ||
    inputFood == "" ||
    inputRent == "" ||
    inputClothes == ""
  ) {
    console.log("Enter a value");
  } else if (
    incomeValue < 0 ||
    foodvalue < 0 ||
    rentValue < 0 ||
    clothesValue < 0
  ) {
    console.log("Enter a positive value");
  } else {
    const totalExpenses = foodvalue + rentValue + clothesValue;
    const balance = incomeValue - totalExpenses;

    if (incomeValue < totalExpenses) {
      console.log("Sorry! You have not enough money");
    } else {
      // get total expenses value & set value
      const totalExpensesValue = document.getElementById("total-expenses");
      totalExpensesValue.innerText = totalExpenses;

      // get balance value & set value
      const balanceValue = document.getElementById("balance");
      balanceValue.innerText = balance;
    }
  }
});
