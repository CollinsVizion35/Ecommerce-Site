const searchContent = document.getElementById('search-content');
let searchProduct = [];






products.forEach(item => {
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = searchProduct.filter((item) => {
        if (item.name.toLowerCase().includes(searchString) {
                // const productID = e.target.dataset.productId;
const productName = item.querySelector('.product-name').innerHTML;
const productPrice = item.querySelector('.product-price').innerHTML;
const productImage = item.querySelector('img').src;


let filteredCharacters = {
    name: productName,
    image: productImage,
    price: +productPrice
    }
    displayProductSearched(filteredCharacters);
});
});
});
});


const displayProductSearched = (searchProduct) => {
    const htmlString = searchProduct
        .map((item) => {
            return `
            <li class="product">
                        <div class="col-8">
                            <a href="#"><img width="300px" height="300px" src="mocassin slip.jpg" alt""></a><br>
                            <h4 class="product-name">${item.name}</h4>
                            <div class="ratting">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                            </div></a>
                            <p><span class="product-curr">₦</span> <span class="product-price">23000</span></p>
                            <div class="on-hover">
                                <button type="button" class="add-to-cart" data-product-id="1">
                                    ADD TO CART
                                </button>
                                <a href="./Mocassin slip.html" class="view-box"><button class="view">
                                    VIEW MORE
                                </button></a>
                            </div>
                        </div>
                    </li>
        `;
        })
        .join('');
        searchContent.innerHTML = htmlString;
};



