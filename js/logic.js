/* -------------------- Getting price showcase field -------------------- */
const totalPrice= document.getElementById('mac-total-price');
const grandTotal= document.getElementById('grand-total');

 /* ------------------------getting buttons and assigning them to price------------------------ */
function getValue(btn,assignField,price){
    document.getElementById(btn).addEventListener('click',function(){
        document.getElementById(assignField).innerText= price;
    getTotalPrice();

    })
}

/* --------------------------- Calling the function for each button ------------------------------- */
getValue('ram-first-Option','ram-price',0);
getValue('ram-second-Option','ram-price',180);
getValue('ssd-first-option','ssdfield',0);
getValue('ssd-second-option','ssdfield',100);
getValue('ssd-third-option','ssdfield',180);
getValue('ssd-third-option','ssdfield',180);
getValue('free-shipping','shipping-cost',0);
getValue('paid-shipping','shipping-cost',20);

// ----------------------------- Getting the total price --------------------------
function getTotalPrice(){
    const ram= document.getElementById('ram-price');
    const ssd= document.getElementById('ssdfield');
    const shipping= document.getElementById('shipping-cost');

    totalPrice.innerText= 1299 + parseInt(ram.innerText)+parseInt(ssd.innerText)+parseInt(shipping.innerText);
    grandTotal.innerText= 1299 + parseInt(ram.innerText)+parseInt(ssd.innerText)+parseInt(shipping.innerText);
}

/*  -----------------------------------counting the discount-------------------------- */
const getUserInput = document.getElementById('discountCode');
function discountCode(discountButton){
    document.getElementById(discountButton).addEventListener('click',function(){
        if(getUserInput.value=='stevekaku'){
            let discount =Math.round(  (parseInt(totalPrice.innerText)- parseInt(totalPrice.innerText)*0.2).toFixed(2));
            grandTotal.innerText= discount;
            getUserInput.value='';
        }
    })
}

 /* ------------------------------------getting the discount-------------------------- */
discountCode('discount-btn');