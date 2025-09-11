
let cart = [];

function init() {
    renderContent();
    renderOffers();
    getFromLocalStorage();
}

function getFromLocalStorage(){
    let cartString = localStorage.getItem("cart")
    if (cartString !== null) {
        cart = JSON.parse(cartString);
    }
    renderBasket();
};

function saveToLocalStorage(cart){
    localStorage.setItem("cart", JSON.stringify(cart)); 
};

function renderContent() {
    let contentRef = document.getElementById("renderContent");
    contentRef.innerHTML = `
        <div id="left" class="left"></div>
        <div class="right">
            <div class="shopping_cart">
                <h3>Dein Warenkorb</h3>
                <div id="basket" class="scrollbar"></div>
                <div class="order_button">
                    <button>Bestellen</button>
                </div>
                <div id="sum" class="sum">
                    <p>0,00€</p>
                </div>
            </div>
        </div>
    `;
}

function renderOffers() {
    let offersRef = document.getElementById("left");

    for (let i = 0; i < offers.length; i++) {
        offersRef.innerHTML += `<h2 id="${offers[i].type}">${offers[i].type}</h2>`;
        renderSingleMenu(i);
    }
}

function renderSingleMenu(i) {
    let singleMenuRef = document.getElementById("left");
    let info = offers[i].info;

    for (let j = 0; j < info.length; j++) {
        singleMenuRef.innerHTML += `
            <div class="name">
                <div class="menu">
                    <div class="info">
                        <h3>${info[j].name}</h3>
                        <p>${info[j].description}</p>
                        <p class="price">${info[j].price.toFixed(2).replace('.', ',')}€</p>
                    </div>
                    <div class="add">
                        <p class="orange" onclick="addToBasket(${i}, ${j})">+</p>
                    </div>
                </div>
            </div>
        `;
    }
}

function addToBasket(i, j) {
    let infoItem = offers[i].info[j];
    let existingItem = cart.find(item => item.id === `item${i}${j}`);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: `item${i}${j}`,
            name: infoItem.name,
            price: infoItem.price,
            quantity: 1
        });
    }

    saveToLocalStorage(cart);
    renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById("basket");
    basketRef.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        basketRef.innerHTML += `
            <div class="basket_item" id="${item.id}">
                <div class="basket_content">
                    <h4>${item.name}</h4>
                    <img src="img/icons/trash.svg" alt="delete" onclick="deleteItem('${item.id}')">
                </div>
                <div class="calculate_and_amount">
                    <p class="orange" onclick="minus('${item.id}')">-</p>
                    <p class="gray">${item.quantity}</p>
                    <p class="orange" onclick="plus('${item.id}')">+</p>
                    <p>${(item.price * item.quantity).toFixed(2).replace('.', ',')}€</p>
                </div>
            </div>
        `;
        total += item.price * item.quantity;
    });

    document.getElementById("sum").innerText = `${total.toFixed(2).replace('.', ',')}€`;
}

function deleteItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveToLocalStorage(cart);
    renderBasket();
}

function plus(id) {
    let item = cart.find(item => item.id === id);
    if (item && item.quantity < 10) {
        item.quantity++;
        saveToLocalStorage(cart);
        renderBasket();
    }
}

function minus(id) {
    let item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        saveToLocalStorage(cart);
        renderBasket();
    }
}
