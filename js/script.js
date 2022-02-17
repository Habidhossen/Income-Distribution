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
    document.getElementById("alert-1").style.display = "block";
  } else if (
    incomeValue < 0 ||
    foodvalue < 0 ||
    rentValue < 0 ||
    clothesValue < 0
  ) {
    document.getElementById("alert-2").style.display = "block";
  } else {
    const totalExpenses = foodvalue + rentValue + clothesValue;
    const balance = incomeValue - totalExpenses;

    if (incomeValue < totalExpenses) {
      document.getElementById("alert-3").style.display = "block";
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
  // select input value
  const inputIncome = document.getElementById("inputIncome").value;
  const incomeValue = parseFloat(inputIncome);
  const inputPercentage = document.getElementById("inputPercentage").value;
  const percentageValue = parseFloat(inputPercentage);

  //   percentage calculation
  const savingAmount = (incomeValue * percentageValue) / 100;

  //   set percentage value
  const savingAmountValue = document.getElementById("saving-amount");
  savingAmountValue.innerText = savingAmount;

  // get balance value & set value
  const balanceValue = document.getElementById("balance").innerText;
  const balance = parseFloat(balanceValue);
  const remainingBalance = balance - savingAmount;

  //   set remaining balance value
  const remainingBalanceValue = document.getElementById("remaining-balance");
  remainingBalanceValue.innerText = remainingBalance;
});
