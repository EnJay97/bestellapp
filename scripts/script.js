
let itemArray = [];

function init(){
    //getFromLocalStorage();
    renderContent();
    renderOffers();
}

function renderContent(){
    let contentRef = document.getElementById("renderContent");
    contentRef.innerHTML = "";
    contentRef.innerHTML += `<div id="left" class="left"></div>
                            <div class="right">
                                <div class="shopping_cart">
                                    <h3>Dein Warenkorb</h3>
                                    <div id ="basket"></div>
                                    <div id ="sum" class="sum">
                                        <p>€</p>
                                    </div>
                                </div>
                            </div>`
};

function renderOffers(){
    let offersRef = document.getElementById("left");

    for (let i = 0; i < offers.length; i++) {
        offersRef.innerHTML += `<h2 id="${offers[i].type}">${offers[i].type}</h2>`
        renderSingleMenu(i);                            
    }
};

function renderSingleMenu(i){
    let singleMenuRef = document.getElementById("left");
    let info = offers[i].info;

    for (let j = 0; j < info.length; j++) {
        singleMenuRef.innerHTML += `<div class="name">
                                        <div class="menu">
                                            <div class"info">
                                                <h3>${info[j].name}</h3>
                                                <p>${info[j].description}</p>
                                                <p class="price">${info[j].price.toFixed(2).replace('.', ',')}€</p>
                                            </div>
                                            <div id="plus" class="add" onclick="addToBasket(${i}, ${j})">
                                                <p class"orange">+</p>
                                            </div>
                                        </div>
                                    </div>`
    }
};

function addToBasket(i, j) {
    let info = offers[i].info;
    let basketRef = document.getElementById("basket");
    let amountId = `amount${i}${j}`;
    let amountElement = document.getElementById(amountId);
    let itemId = `item${i}${j}`; // eindeutige ID fürs Löschen

    if (!amountElement) {
        basketRef.innerHTML += `
        <div class="basket_item" id="${itemId}">
            <div class="basket_content">
                <h4>${info[j].name}</h4>
                <img src="img/icons/trash.svg" alt="delete Item" onclick="deleteItem('${itemId}')"> 
            </div>
            <div class="calculate_and_amount">
                <p id="minus" class="orange" onclick="minus('${amountId}')">-</p>
                <p id="${amountId}" class="gray">1</p>
                <p class="orange" onclick="plus('${amountId}', ${info[j].price})">+</p>
                <p>${info[j].price.toFixed(2).replace('.', ',')}€</p>
            </div>
        </div>`;
    } else {
        amountElement.textContent++;
    }
}

// calculate price

function deleteItem(id){
    let element = document.getElementById(id);
    if (element) {
        element.remove();
    }
};

function plus(id, price) {
    let amountRef = document.getElementById(id);
    let amount = parseInt(amountRef.innerText);
    if(amount<10){
        amount++;
        amountRef.innerText = amount;
    // Hier kannst du auch den Gesamtpreis neu berechnen lassen
    }
};

function minus(id, price) {
    let amountRef = document.getElementById(id);
    let amount = parseInt(amountRef.innerText);
    if(amount>1){
    amount--;
    amountRef.innerText = amount;
    }
};