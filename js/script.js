let mobileNumber;

function mobileNumberValidation(){
    mobileNumber = document.querySelector('#mobileNumber').value;
    if(mobileNumber.length >= 9){
        document.querySelector('.invalidMobileNumber').classList.add('invisible');
        return true;
    }else{
        document.querySelector('.invalidMobileNumber').classList.remove('invisible');
        return false;
    }
}
document.querySelector('#mobileNumber').addEventListener("keypress", function(){
    mobileNumberValidation();
});
document.querySelector('.message').addEventListener("click", function(){
    if(mobileNumberValidation()){
        window.open("https://api.whatsapp.com/send/?phone=91"+ mobileNumber +"&text&type=phone_number&app_absent=0", "_self");
    }
});

