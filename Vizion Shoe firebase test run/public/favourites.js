
// favourites

let productsInfav = JSON.parse(localStorage.getItem('favourites'));

if (!productsInfav){
    productsInfav = [];
}

const parentFavElement = document.querySelector('#fav-content');
const favProducts = document.querySelectorAll('.product-page');



// adding it to the shopping cart & Local storage

const updateFavouritesHTML = function () {
    localStorage.setItem('favourites', JSON.stringify(productsInfav));
    if(productsInfav.length > 0) {
        let resultFav = productsInfav.map(favs => {
            return `
            <li class="fav-content-box">

            <div class="fav-image-box">

                <img src="${favs.image}" width="150px" height="150px" alt="" class="fav-image">
            </div>

            <div class="fav-content-details">

                <h4 class="fav-content-name">
                ${favs.name}
                </h4>

                <div class="fav-content-price">₦ ${favs.price}</div>
            </div>
        </li>`
        });
        parentFavElement.innerHTML = resultFav.join('');
    }
    else {
        parentFavElement.innerHTML = '<h4 class="empty-fav">No saved favourite item yet</h4>';
    }
}



// function updateProductsInfav(favs){
//     for (let i = 0; i < productsInfav.length; i++) {
//         if (productsInfav[i].id == favs.id) {
//             productsInfav[i].count += 1;
//             return;
//         }
//     }
//     productsInfav.push(favs);
// }



favProducts.forEach(favs => {
    favs.addEventListener('click', (e) => {
        if (e.target.classList.contains('ri-heart-2-fill')) {
            const favID = e.target.dataset.favId;
            const favName = favs.querySelector('.product-page-name').innerHTML;
            const favPrice = favs.querySelector('.product-price-page-amount').innerHTML;
            const favImage = favs.querySelector('img').src;
            let favItems = {
                name: favName,
                image: favImage,
                id: favID,
                price: +favPrice,
            };
            updateFavouritesHTML();

            
        }
    });
});




// toggle fav
const favClick = selectElement('.fav-click');
const favClickLg = selectElement('.fav-click-lg')
const favBox = selectElement('.fav-box');
const exitFav = selectElement('.exit-fav');


favClick.addEventListener('click', () => {
    favBox.classList.add('activated');
    menu.classList.remove('active');
});

exitFav.addEventListener('click', () => {
    favBox.classList.remove('activated');
});

favClickLg.addEventListener('click', () => {
    favBox.classList.add('activated');
    menu.classList.remove('active');
});

// change color of favourite

const favourite = selectElement ('.ri-heart-2-fill');
const favourite2 = selectElement ('.faveRemove');

console.log(favourite2);

    favourite.addEventListener('click', () => {
        favourite.style.display ='none'
        favourite2.style.display ='block'
        searchBox.classList.remove('activated');
    });

    favourite2.addEventListener('click', () => {
        favourite2.style.display ='none'
        favourite.style.display ='block'
        searchBox.classList.remove('activated');
    });
    

    // delete from favourite

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('faveRemove')) {
            for(let i=0;  i < productsInfav.length; i++) {
                if(productsInCart[i] <= 0){
                    productsInCart.splice(i, 1);
                }
            }
        }// } else if (e.target.classList.contains('faveAdd')) {
        //     for(let i=0;  i < productsInfav.length; i++) {
        //         productsInfav.map();
        //     }
        // }
    });

    
    console.log(productsInfav);

    