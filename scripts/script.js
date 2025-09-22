
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

function renderContent(){
    let contentRef = document.getElementById("renderContent")
    contentRef.innerHTML += contentTemplate();
}

function renderOffers() {
    let offersRef = document.getElementById("left");

    for (let i = 0; i < offers.length; i++) {
        offersRef.innerHTML += offersTemplate(offers, i);
        renderSingleMenu(i);
    }
}

function renderSingleMenu(i) {
    let singleMenuRef = document.getElementById("left");
    let info = offers[i].info;

    for (let j = 0; j < info.length; j++) {
        singleMenuRef.innerHTML += singleMenuTemplate(info[j], i, j);
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
    enableOrderButton();
    renderBasket();
}

function renderBasket() {
    let basketRef = document.getElementById("basket");
    basketRef.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        basketRef.innerHTML += basketTemplate(item)
        total += item.price * item.quantity;
    });

    document.getElementById("sum").innerText = `${total.toFixed(2).replace('.', ',')}€`;
}

function deleteItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveToLocalStorage(cart);
    enableOrderButton();
    renderBasket();
}

function plus(id) {
    let item = cart.find(item => item.id === id);
    if (item && item.quantity < 10) {
        item.quantity++;
        saveToLocalStorage(cart);
        enableOrderButton();
        renderBasket();
    }
}

function minus(id) {
    let item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        saveToLocalStorage(cart);
        enableOrderButton();
        renderBasket();
    }
}

function placeOrder(){
    cart = [];
    let basketRef = document.getElementById("basket");
    basketRef.innerHTML = "";
    let sumRef = document.getElementById("sum");
    sumRef.innerText = "0,00€"
    saveToLocalStorage(cart);
    openOverlay()
}

function enableOrderButton(){
    const orderButton = document.getElementById("order_button");
    if(cart.length === 0) {
        orderButton.disabled = true;
    } else{
        orderButton.disabled = false;
        orderButton.classList.remove("disabled");
    }
}

function openOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.remove("d_none");
}

function closeOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.add("d_none");
    enableOrderButton();
}

function toggleNavbar(){
    let navbarRef = document.getElementById("toggle_menu");
    navbarRef.classList.toggle("d_none")
    navbarRef.classList.toggle("toggle_menu")
}