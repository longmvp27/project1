// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("shop-btn");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}
close_footer.onclick = function() {
    modal.style.display = "none";
}
order.onclick = function() {
    window.location.replace('../shipping/shipping.html')
}
window.onclick = function(event) {
    if(event.target == modal) {
        modal.display.style = "none";
    }
}
// Update cart
function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
        var cart_row = cart_rows[i];
        var price_item = cart_row.getElementsByClassName("cart-price")[0];
        var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
        var price_slice = price_item.innerText.slice(1,5)
        var price = parseFloat(price_slice);
        var quantity = quantity_item.value ;
        total = total + (price * quantity);
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + ' $'
}
// change quantities in cart
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
    var input = quantity_input[i];
    input.addEventListener("change", function (event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart();
    })
}
// add items to cart
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
    var add = add_cart[i];
    add.addEventListener("click", function (event) {
        var button = event.target;
        var product = button.parentElement;
        var img = product.getElementsByClassName("content-img")[0].src
        var title = product.getElementsByClassName("content-name")[0].innerText
        var price = product.getElementsByClassName("content-price")[0].innerText.slice(0, 5)
        addItemToCart(title, price, img)
        modal.style.display = "block";
        updatecart()
    })
}

function addItemToCart(title, price, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cart_title = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText == title) {
        alert('The product has been in shopping cart')
        return
        }
    }

    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${img}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Delete</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
        updatecart();
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart();
    })
}
// delete items from cart 
// var remove_cart = document.getElementsByClassName("btn-danger");
// console.log(remove_cart.length)
// for (var i = 0; i < remove_cart.length; i++) {
//     var button = remove_cart[i]
//     button.addEventListener("click", function () {
//         var button_remove = event.target
//         button_remove.parentElement.parentElement.remove()
//         updatecart()
//     })

// }
// log out button
function logOut() {
    window.location.replace('../log_in/login.html')
}
