
function contentTemplate() {
    return `
        <div id="left" class="left"></div>
        <div id="right_basket" class="right" onclick="openBasket()">
            <div class="shopping_cart">
                <h3>Dein Warenkorb</h3>
                <button id="closeBasket" onclick="closeBasket()">&times</button>
                <div id="basket" class="scrollbar"></div>
                <div class="order_button">
                    <button id="order_button" onclick="placeOrder()" disabled>Bestellen</button>
                </div>
                <div id="sum" class="sum">
                    <p>0,00€</p>
                </div>
            </div>
        </div>
    `;
}

function offersTemplate(offers, i){
    return `<h2 id="${offers[i].type}">${offers[i].type}</h2>`
}

function singleMenuTemplate(item, i, j){
    return`<div class="name">
                <div class="menu">
                    <div class="info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p class="price">${item.price.toFixed(2).replace('.', ',')}€</p>
                    </div>
                    <div class="add">
                        <p class="orange" onclick="addToBasket(${i}, ${j})">+</p>
                    </div>
                </div>
            </div>`
}

function basketTemplate(item){
    return`<div class="basket_item" id="${item.id}">
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
            </div>`
}