// console.log('login button clicked')

document.getElementById('login-button').addEventListener('click', function(event){
    window.location.href = '/home.html'
    event.preventDefault();  // <--- Vejaila To Begainears --->
    console.log('login button clicked')
    const PhoneNumber = document.getElementById('phone-number');
    const pinNumber = document.getElementById('pin-number');    
   
    const floatNumber = document.getElementById('bank-float')
     console.log(PhoneNumber, pinNumber, floatNumber)

    if(PhoneNumber=== '5' && pinNumber=== '1234' && floatNumber=== '1'){
        console.log('you are loged in')
    }
    else{
        alert('Wrong phone number and pin')
    }

})