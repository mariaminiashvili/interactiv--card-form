const button = document.querySelector(".button");
const continueButton = document.querySelector(".continue");


const cardNameInput = document.querySelector(".card-name-input");
const cardNumberInput = document.querySelector(".card-number-input");
 

const month = document.querySelector(".month");
const year = document.querySelector(".year");
const cvc = document.querySelector(".cvc");


const backNumber = document.querySelector(".back-number");
const frontNumber = document.querySelector(".front-card-number");
const cardName = document.querySelector(".name");
const cardMonth = document.querySelector(".mm");
const cardYear = document.querySelector(".yy");


const input = document.querySelectorAll("input");
const info = document.querySelector(".info");
const thankYou = document.querySelector(".complate");


const numberError = document.querySelector(".number-error");
const expError = document.querySelector(".exp-error");
const cvcError = document.querySelector(".cvc-error");



button.addEventListener("click" , function(){
    if(cardNameFun() === true &&
    cardNumberFun()=== true &&
    monthFun()=== true &&
    yearFun()=== true &&
    cvcFun()=== true 
    ){
    cardNameFun() ;
    cardNumberFun();
    monthFun();
    yearFun();
    cvcFun();
    info.style.display = "none";
    thankYou.style.display = "block";
}else{
    cardNameFun() ;
    cardNumberFun();
    monthFun();
    yearFun();
    cvcFun();
}
})


continueButton.addEventListener("click" , function(){
    info.style.display = "flex";
    thankYou.style.display = "none";
    cardNameInput.value = "";
    cardNumberInput.value = "";
    month.value = "";
    year.value = "";
    cvc.value = "";
    cardName.innerHTML = "JANE APPLESEED";
    frontNumber.innerHTML = "0000 0000 0000 0000";
    cardMonth.innerHTML = "00";
    cardYear.innerHTML = "00";
    backNumber.innerHTML = "000";
    input[0].style.borderColor = "#dfdee0";
    input[1].style.borderColor = "#dfdee0";
    input[2].style.borderColor = "#dfdee0";
    input[3].style.borderColor = "#dfdee0";
    input[4].style.borderColor = "#dfdee0";
})


let cardNameFun = function(){
    if(input[0].value.match(/^[A-Za-z]+$/)){
        cardName.innerHTML = cardNameInput.value;
        input[0].style.borderColor = "hsla(249, 99%, 64%, 1)";
        return true;
    }else{
        cardName.innerHTML;
        input[0] .style.borderColor = "red";
        return false;
}
}


let cardNumberFun = function(){
    if(input[1].value.match(/^\d+/) && cardNumberInput.value.length === 16){
        frontNumber.innerHTML = cardNumberInput.value.match(/.{1,4}/g).join(" ");
        input[1].style.borderColor = "hsla(249, 99%, 64%, 1)";
        numberError.style.display = "none";
        return true;
    }else{
        frontNumber.innerHTML;
        input[1] .style.borderColor = "red";
        numberError.style.display = "block";
        return false;
    }
    }


let monthFun = function(){
    if(input[2].value.match(/^\d+/) && month.value.length === 2){
        cardMonth.innerHTML = month.value;
        input[2].style.borderColor = "hsla(249, 99%, 64%, 1)";
         expError.style.display = "none";
        return true;
    }else{
        cardMonth.innerHTML;
        input[2] .style.borderColor = "red";
        expError.style.display = "block";
         return false;
    }
    }


let yearFun = function(){
     if(input[3].value.match(/^\d+/) && year.value.length === 2){
        cardYear.innerHTML = year.value;
        input[3].style.borderColor = "hsla(249, 99%, 64%, 1)";
        expError.style.display = "none";
        return true;
     }else{
        cardYear.innerHTML;
        input[3] .style.borderColor = "red";
        expError.style.display = "block";
        return false;
    }
    }


    let cvcFun = function(){
        if(input[4].value.match(/^\d+/) && cvc.value.length === 3){
            backNumber.innerHTML = cvc.value;
           input[4].style.borderColor = "hsla(249, 99%, 64%, 1)";
           cvcError.style.display = "none";
           return true;
        }else{
            backNumber.innerHTML;
           input[4] .style.borderColor = "red";
           cvcError.style.display = "block";
           return false;
       }
       }
   