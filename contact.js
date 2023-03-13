const nameError=document.querySelector('#error-name');
const emailError=document.querySelector('#error-email');
const phone=document.querySelector('#phone');
// console.log(fullName);
// console.log(email);
// console.log(phone);

function validateName(){
    const fullName=document.querySelector('#name').value;
    // console.log(fullName);
    nameError.style.color='red';
    if(fullName.length==0){
        nameError.innerText='Vui lòng nhập';
        return false;
    }
    else{
        nameError.innerText='ok';
        nameError.style.color='green';
        return true;
    }
}

function validateEmail(){
    const email=document.querySelector('#email').value;
    var checkEmail=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    emailError.style.color='red';
    if(email.length==0){
        emailError.innerText='Vui lòng nhập Email';
        return fasle;
    }
    else if(email.match(checkEmail)){
        emailError.innerText='Vui lòng nhập định dạng Email';
        return fasle;
    }
    else {
        emailError.style.color='green';
        emailError.innerText='ok';
        return true
    }

}

function validate_sodienthoai(){
    const sodienthoai=document.getElementById('sodienthoai').value.trim().trim();
    const error_sodienthoai=document.getElementById('error_sodienthoai');
    const checkphoneGlobal=/((09|03|07|08|05)+([0-9]{8})\b)/g;
    // /b 	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
    // /g Find global
    // {8} is 8 character is digit in range(0,9)
    if(sodienthoai.length==0){
        error_sodienthoai.style.color='red';
        error_sodienthoai.innerHTML="Vui lòng nhập trường này";
        return false;
    }
    else if(!sodienthoai.match(checkphoneGlobal) || sodienthoai.length>10){
        error_sodienthoai.style.color='red';
        error_sodienthoai.innerHTML="Vui lòng nhập đúng định dạng số điện thoại";
        return false;
    }
    else {
        error_sodienthoai.style.color='green';
        error_sodienthoai.innerHTML='';
        return true;
    }
}

// const submit=document.querySelector('#submit');
// console.log(submit);
// submit.addEventListener('submit',(){
    
// })