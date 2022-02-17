// get input value function
function getInput(inputId) {
  const input = document.getElementById(inputId).value;
  return input;
}
// alert message function
function alertMessage(inputId) {
  document.getElementById(inputId).style.display = "block";
}

// Calculate Button
document.getElementById("calculate-btn").addEventListener("click", function () {
  // get value
  const inputIncome = getInput("inputIncome");
  const inputFood = getInput("inputFood");
  const inputRent = getInput("inputRent");
  const inputClothes = getInput("inputClothes");
  // convert value
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
    alertMessage("alert-1");
  } else if (
    incomeValue < 0 ||
    foodvalue < 0 ||
    rentValue < 0 ||
    clothesValue < 0
  ) {
    alertMessage("alert-2");
  } else {
    const totalExpenses = foodvalue + rentValue + clothesValue;
    const balance = incomeValue - totalExpenses;

    if (incomeValue < totalExpenses) {
      alertMessage("alert-3");
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

// Save Button
document.getElementById("save-btn").addEventListener("click", function () {
  // get value
  const inputIncome = getInput("inputIncome");
  const inputPercentage = getInput("inputPercentage");
  // convert value
  const incomeValue = parseFloat(inputIncome);
  const percentageValue = parseFloat(inputPercentage);
  // check condition
  if (inputIncome == "" || inputPercentage == "") {
    alertMessage("alert-1");
  } else if (incomeValue < 0 || inputPercentage < 0) {
    alertMessage("alert-2");
  } else {
    // percentage calculation
    const savingAmount = (incomeValue * percentageValue) / 100;
    // get balance value & set value
    const balanceValue = document.getElementById("balance").innerText;
    const balance = parseFloat(balanceValue);

    if (balance < savingAmount) {
      alertMessage("alert-3");
    } else {
      // set percentage value
      const savingAmountValue = document.getElementById("saving-amount");
      savingAmountValue.innerText = savingAmount;
      // calculation
      const remainingBalance = balance - savingAmount;
      // set remaining balance value
      const remainingBalanceValue =
        document.getElementById("remaining-balance");
      remainingBalanceValue.innerText = remainingBalance;
    }
  }
});
