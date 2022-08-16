// step-1: add eventlistener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw amount from the withdraw field
    // For input field use .value to get the inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7: clear the withdraw field
    withdrawField.value = '';


    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a number');
        return;
    }

    // step-3: get the current withdraw total
    // for non-input (element other that input, textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er Bank e eto taka nai!');
        return;
    }

    // step-4: add numbers to set the withdraw
    const currentwithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
    // set the withdraw total
    withdrawTotalElement.innerText = currentwithdrawTotal;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
});
