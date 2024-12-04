//add money to the account
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    //prevent page reload after submit
    event.preventDefault();
    //get money to be added to the account balance

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    //ge the pin number provided
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);
});

