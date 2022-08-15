$(document).ready(function () {
    $.getScript("./payment.js", function (data) {
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

 


// Shopping cart

let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));

if (!productsInCart){
    productsInCart = [];
}
const parentElement = document.querySelector('#cart-content');
const cartSumPrice = document.querySelector('#checkout-price');
const checkoutButton = document.querySelector('.cart-checkout')
console.log(checkoutButton);
const products = document.querySelectorAll('.col-8');
let myProduct = document.querySelectorAll('.product');
const cartNotificationSm = document.querySelector('.items-length-btn-sm');
const cartNotificationLg = document.querySelector('.items-length-btn-lg');



const countTheSumPrice = function(){
    let sumPrice = 0;
    productsInCart.forEach(item => {
        sumPrice += item.price;
    });
    return sumPrice;
};

function updateCartNotif(){
    let cartNum = 0;

    productsInCart.forEach((item) => {

        cartNum += item.count;
        if (cartNum >= 1) {
            cartNotificationSm.innerHTML = cartNum;
            cartNotificationLg.innerHTML = cartNum;
        }else if (cartNum = 0){
            cartNotificationSm.innerHTML = '0';
            cartNotificationLg.innerHTML = '0';
            cartNotificationSm.style.display = 'none';
            cartNotificationLg.style.display = 'none';
        }
        
    });

    
};
    
updateCartNotif()







// adding it to the shopping cart & Local storage

const updateShoppingCartHTML = function () {
    localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
    if(productsInCart.length > 0) {
        let result = productsInCart.map(item => {
            return `
                <li class="cart-content-box">

					<div class="image-box">

						<img src="${item.image}" width="150px" height="150px" alt="" class="cart-image">
					</div>

					<div class="cart-content-details">

						<h4 class="cart-content-name">
                            ${item.name}
						</h4>

						<div class="cart-content-price">₦ ${item.price}</div>

						<div class="cart-incr-decr">

							<button class="cart-decr" data-id=${item.id}>-</button>

							<div class="incr-decr-num">${item.count}</div>

							<button class="cart-incr" data-id=${item.id}>+</button>
						</div>
					</div>
				</li>`
        });
        parentElement.innerHTML = result.join('');
        document.querySelector('.checkout').classList.remove('hidden');

        cartSumPrice.innerHTML = "₦" + countTheSumPrice();
        updateCartNotif();
    }
    else {
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty">Oops<br>Your Shopping Cart is Empty!</h4>';
        cartSumPrice.innerHTML = '';
    }
}




function updateProductsInCart(item){
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == item.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(item);
    
    updateCartNotif();
}






products.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productID = e.target.dataset.productId;
            const productName = item.querySelector('.product-name').innerHTML;
            const productPrice = item.querySelector('.product-price').innerHTML;
            const productImage = item.querySelector('img').src;
            let product = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice
            }
            updateProductsInCart(product);
            updateShoppingCartHTML();
            updateCartNotif();
        }
    });
});



parentElement.addEventListener('click', (e) => {
    const isIncrease = e.target.classList.contains('cart-incr');
    const isDecrease = e.target.classList.contains('cart-decr');

    if (isIncrease || isDecrease) {
        for(let i=0;  i < productsInCart.length; i++) {
            if (productsInCart[i].id === e.target.dataset.id){
                if(isIncrease){
                    productsInCart[i].count += 1;
                }
                else if(isDecrease) {
                    productsInCart[i].count -= 1;
                }
                productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            }
            if(productsInCart[i].count <= 0){
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
    }
});

updateShoppingCartHTML();


