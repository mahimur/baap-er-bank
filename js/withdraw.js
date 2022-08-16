// step-1: add eventlistener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw amount from the withdraw field
    // For input field use .value to get the inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);

    // step-3: get the current withdraw total
    // for non-input (element other that input, textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

    // add numbers to set the withdraw
    const currentwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;
    // set the withdraw total
    withdrawTotalElement.innerText = currentwithdrawTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newwithdrawAmount;

    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the withdraw field
    withdrawField.value = '';
});
