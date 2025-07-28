
let i = 0;

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
    let uniqueId = `amount${i}${j}`;
    
    basketRef.innerHTML += `
        <div class="basket_content">
            <h4>${info[j].name}</h4>   
        </div>
        <div class="calculate_and_amount">
            <p class="orange" onclick="minus('${uniqueId}')">-</p>
            <p id="${uniqueId}" class="gray">1</p>
            <p class="orange" onclick="plus('${uniqueId}', ${info[j].price})">+</p>
            <p>${info[j].price.toFixed(2).replace('.', ',')}€</p>
        </div>`;
};

// calculate price

function calculatePrice(){

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