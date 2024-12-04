// document.getElementById('button-login').addEventListener('click', function (event) {
//     event.preventDefault();

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     if (phoneNumber === '5' && pinNumber === '1234') {
//         console.log('you are login')
//     }
//     else {
//         alert('wrong phone number or pin');
//     }
// })

document.getElementById('button-login').addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '5' && pinNumber == '1234') {
        console.log('you are login');
        window.location.href = '/home.html';
    }
    else {
        alert('wrong phone number or pin')
    }
});