//add money to the account
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    //prevent page reload after submit
    event.preventDefault();
    //get money to be added to the account balance

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    //ge the pin number provided
    const pinNumber = document.getElementById('input-pin-number').value;
    //verify the pin number
    if (pinNumber === '1234') {
        console.log('add money to ur account');
        //get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance)

        //add addMoney Input with  balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        //update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('please try again')
    }
});

