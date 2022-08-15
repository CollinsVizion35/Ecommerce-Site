$(document).ready(function () {
    $.getScript("./shoppingCart.js", function (data) {
      console.log("Load was performed.");
      console.log(checkoutCheckoutPrice);

        checkoutCheckoutPrice.innerHTML = `${countTheSumPrice()}`;

        document.addEventListener('click', () => {
            if (e.target.classList.contains('cart-checkout')) {
                if(productsInCart.length > 0) {
                    let result = productsInCart.map(item => {
                    checkoutCheckoutList.innerHTML = `<img src="${item.image}" width="150px" height="150px" alt="" class="cart-image"> <br> <div class="incr-decr-num">${item.count}</div>`
                    });
                    checkoutCheckoutList.innerHTML = result.join('');
                }
            }
        })
        
      
    });
  });



// get all elements
const inputFirstName = document.getElementById('inputFirstName');
const inputLastName = document.getElementById('inputLastName');
const inputEmail = document.getElementById('inputEmail');
const inputCountry = document.getElementById('inputCountry');
const inputCountryOption = document.querySelector('.countryOption');
const inputStreetAddress = document.getElementById('inputStreetAddress');
const inputState = document.getElementById('inputState');
const inputPostalCode = document.getElementById('inputPostalCode');
const inputPhone = document.getElementById('inputPhone');
const inputPromotional = document.getElementById('inputPromotional');
const applyPromotional = document.getElementById('applyPromotional')
const placeOrder = document.getElementById('placeOrder1');
const alertComment = document.getElementById('alertComment');
const allInfoPage = document.querySelector('.allInfoPage');
const paymentCommence = document.querySelector('.paymentCommence');
const checkoutCheckoutPrice = document.getElementById('checkout-checkout-price');
const checkoutCheckoutList = document.getElementById('checkout-checkout-list')



let canSubmit = false;

// customers voucher submit

function canSubmitVoucher () {
    let promotional = inputPromotional.value.trim();

    if (promotional.length > 5) {
        applyPromotional.classList.add('activated');
            applyPromotional.disabled = false;
            canSubmit = true;
    }else {
        no_voucher_submit();
}
}

function no_voucher_submit() {
    applyPromotional.classList.remove('activated');
    applyPromotional.disabled = true;
    canSubmit = false;
};


// customers info submit 

function canPlaceorder () {
    //check the required field

                let firstName = inputFirstName.value.trim();
                let lastName = inputLastName.value.trim();
                let email = inputEmail.value.trim();
                let country = inputCountryOption.value;
                let address = inputStreetAddress.value.trim();
                let state = inputState.value.trim();
                let postalcode = inputPostalCode.value.trim();
                let phone = inputPhone.value.trim();

    if (firstName.length > 1 && email.length > 4 && lastName.length > 1 && country.length > 0 && address.length > 4 && state.length > 0 && postalcode.length > 4 && phone.length > 4) {
        alertComment.style.visibility = "hidden";
        if (placeOrder_validateEmail(email)) {
            placeOrder.classList.add('activated');
            placeOrder.disabled = false;
            canSubmit = true;
            
        }else {
            disabledPlaceOrder();
        }
    } else {
        alertComment.style.visibility = "visible";
        disabledPlaceOrder();
    }
};

function disabledPlaceOrder() {
            placeOrder.classList.remove('activated');
            placeOrder.disabled = true;
            canSubmit = false;
};


    // voucher submit process

    function voucher_submit () {
        if (canSubmit) {
            let voucher = {
                promotional: inputPromotional.value.trim(), 
            };
            no_voucher_submit();
        }
    }


    // place order process and proceed to payment

    function placeorder_submit () {
        if (canSubmit) {
            let info = {
                firstName: inputFirstName.value.trim(),
                lastName: inputLastName.value.trim(),
                email: inputEmail.value.trim(),
                country: inputCountryOption.value,
                address: inputStreetAddress.value.trim(),
                state: inputState.value.trim(),
                postalcode: inputPostalCode.value.trim(),
                phone: inputPhone.value.trim(),
            };
            disabledPlaceOrder();
        }
        allInfoPage.style.display = 'none';
        paymentCommence.style.display = 'flex';
    }

    // go backk to info page
    const goBackToInfo = document.getElementById('goBackToInfo');

    goBackToInfo.addEventListener('click', () => {
        allInfoPage.style.display = 'flex';
        paymentCommence.style.display = 'none';
        canPlaceorder ();
    })

    // validate Email Address

function placeOrder_validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// set event listeners

function placeOrder_set_event_listeners() {
    placeOrder.addEventListener('click', placeorder_submit);
    inputFirstName.addEventListener('keyup', canPlaceorder);
    inputLastName.addEventListener('keyup', canPlaceorder);
    inputEmail.addEventListener('keyup', canPlaceorder);
    inputCountryOption.addEventListener('change', canPlaceorder);
    inputStreetAddress.addEventListener('keyup', canPlaceorder);
    inputState.addEventListener('keyup', canPlaceorder);
    inputPostalCode.addEventListener('keyup', canPlaceorder);
    inputPhone.addEventListener('keyup', canPlaceorder);
    inputPromotional.addEventListener('keyup', canSubmitVoucher);
    applyPromotional.addEventListener('click', voucher_submit);
}
placeOrder_set_event_listeners();













// ------------------------------------Payment Methods -------------------------------------------\\


// payStack Payment

// var url = "./shoppingCart.js";
// let checkoutCheckoutPrice = document.getElementById('checkout-checkout-price');
    
//     $.getScript(url, function(){
//         $(document).ready(function(){
//             console.log(cartSumPrice);
//         });
//     });
const scriptTag = document.createElement("script");
scriptTag.src = "./main.js";
document.body.appendChild(scriptTag);

      console.log("Load was performed.");
      console.log(menu);


// $(document).ready(function () {
//     $.getScript("./shoppingCart.js", function (data) {
//       console.log(data); // Text of JS file
//       console.log("Load was performed.");
//       const cartSumPrice = document.querySelector('#checkout-price');
//       console.log(document.querySelector('#checkout-price'));
//     });
//   });




checkoutCheckoutPrice.innerHTML = cartSumPrice.innerHTML

console.log(checkoutCheckoutPrice.innerHTML);


function payWithPaystack() {

    const paystack = new PaystackPop();
paystack.newTransaction({ 
        key: 'pk_test_555044d436b55ce16abdc53b39c52e77c0ade3a3', //put your public key here
        email: `${inputEmail.value}`, //put your customer's email here
        amount: `${checkoutCheckoutPrice.innerHTML}` + '00', //amount the customer is supposed to pay (the 2 zeros at the end must be there)
        metadata: {
            custom_fields: [
                {
                    display_name: `${inputFirstName.value}`,
                    variable_name: `${inputLastName.value}`,
                    value: `${inputPhone.value}` //customer's mobile number
                }
            ]
        },
        onSuccess: (response) => { 
            //after the transaction have been completed
            //make post call  to the server with to verify payment 
            //using transaction reference as post data
            $.post("verify.php", {reference:response.reference}, function(status){
                if(status == "success")
                    //successful transaction
                    alert('Transaction was successful');
                else
                    //transaction failed
                    alert(response);
            });
        },
        onCancel: () => {
            //when the user close the payment modal
            alert('Transaction cancelled');
        }
    });
}

// payPal Method

paypal.Buttons({
    style: {
        layout: 'vertical',
        color:  'blue',
        shape:  'rect',
        label:  'paypal'
      },
    
    createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '3700'
          }
        }]
      });
    },

    onApprove: function(data, actions) {
        // This function captures the funds from the transaction.
        return actions.order.capture().then(function(details) {
          // This function shows a transaction success message to your buyer.
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      },

      onCancel: function (data) {
        // Show a cancel page, or return to cart
      },

      onError: function (err) {
        // For example, redirect to a specific error page
        window.location.href = "/your-error-page-here";
      }
  }).render('#paypal-button-container');

//   Once transaction is completed
