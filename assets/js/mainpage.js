


document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
    loadContent();

}


function loadContent() {
    //Remove Food Items  From Cart
    let btnRemove = document.querySelectorAll('.remove-btn');
    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });

    //Product Item Change Event
    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input) => {
        input.addEventListener('change', changeQty);
    });

    //product to cart
    var cartbtns = document.querySelectorAll(".add-cart")
    cartbtns.forEach((btn) => {
        btn.addEventListener("click", addCart)
    })
    updateTotal()

}

//remove item from cart
function removeItem() {

    let title = this.parentElement.querySelector('.cart-con-title').innerHTML;
    itemList = itemList.filter(el => el.title != title)
    this.parentElement.remove();
    loadContent();

}

//Change Quantity
function changeQty() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    loadContent();
}

let itemList = [];
//product adding to cart
function addCart() {
    let products = this.parentElement;
    let title = products.querySelector('#clothes-title').innerHTML;
    let price = products.querySelector('#clothes-price').innerHTML;
    let imgSrc = products.querySelector('#clothes-img').src;
    console.log(title, price, imgSrc);

    let newProduct = { title, price, imgSrc }

    //Check Product already Exist in Cart
    if (itemList.find((el) => el.title == newProduct.title)) {
        alert("Product Already added in Cart");
        return;
    } else {
        itemList.push(newProduct);
    }

    let arryitem = []
    arryitem = itemList.length
    localStorage.setItem("arryitems", JSON.stringify(arryitem))



    let newProductElement = createCartProduct(title, price, imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;
    let cartBasket = document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();

    // let productdetails = {
    //     "brand": title,
    //     "rate": price,
    //     "image": imgSrc,
    // }

    // details = JSON.parse(localStorage.getItem("allprodet")) ?? []

    // details.push(productdetails)

    // localStorage.setItem("allprodet", JSON.stringify(details))


}


function createCartProduct(title, price, imgSrc) {
    return `
    <div class="cart-box">
    <div class="row mt-4">
        <div class="col-6 d-flex align-items-center">
            <img src="${imgSrc}" class="img-fluid"
                style="width: 120px; height: 120px;object-fit: cover;" alt="">
            <div class="price-box ms-3">
                <div class="cart-con-title text-success fs-5 fw-bold">${title}</div>
                <div class="cart-price fw-normal">${price}.00</div>
            </div>
        </div>
        <div class="col-2 text-center">
            <input type="number" value="1" class="cart-quantity w-50 mt-5 text-center">
        </div>
        <div class="col-2">
            <div class="cart-amt text-center mt-5">${price}</div>
        </div>
        <p class="remove-btn text-danger text-center col-2 fs-5 mt-5"><i
                class="fa-regular fa-trash-can"></i></p>
        <hr class="mt-4">
    </div>
</div>
`;
}

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-box');
    //   const totalValue=document.querySelector('.total-price');

    let total = 0;

    cartItems.forEach(product => {
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("rs.", ""));
        let qty = product.querySelector('.cart-quantity').value;
        total += (price * qty);
        product.querySelector('.cart-amt').innerText = "rs." + (price * qty) + ".00";

    });


    localStorage.setItem("totalprice", JSON.stringify(total))


    // Add Product Count in Cart Icon

    const cartCount = document.querySelector('.cart-count');
    let count = itemList.length;
    cartCount.innerHTML = count;

    if (count == 0) {
        cartCount.style.display = 'none';
    } else {
        cartCount.style.display = 'block';
    }
}











var checkoutbutton1 = document.getElementById("checkbtn1")



checkoutbutton1.addEventListener("click", () => {
    window.location.href = "index.html"
})
function loadcheckoutpage() {
    if (itemList.length > 0) {
        window.location.href = "checkout.html";
    }
    else {
        alert("Your cart is empty")
    }
}
