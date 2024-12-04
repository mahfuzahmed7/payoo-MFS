/**
 * 1. add event listener to the add money button(from submit)
 */

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin-number').value;
    // console.log(addMoney, pinNumber)
    if (pinNumber === '1234') {
        //add money to the account
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add money. Please try again later.')
    }
})