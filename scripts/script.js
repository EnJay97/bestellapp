
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
                                                <p>+</p>
                                            </div>
                                        </div>
                                    </div>`
    }
};

// add to basket

function addToBasket(i, j) {
    let info = offers[i].info;
    let basketRef = document.getElementById("basket");
    basketRef.innerHTML += `<div class="basket_content">
                                <p>${info[j].name}</p>
                                <p>${info[j].price.toFixed(2).replace('.', ',')}€</p>
                            </div>`
    calculatePrice(j)
};

// calculate price

function calculatePrice(j){
    let info = offers[i].info;
    let sum = 0;
    let sumRef = document.getElementById("sum")

    sum = info[j].price + info[j].price;
    sumRef.innerHTML =`<p>€</p>`
}
//  