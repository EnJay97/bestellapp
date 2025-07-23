
let i = 0;

function init(){
    //getFromLocalStorage();
    renderContent();
    renderOffers();
}

// offers anzeigen

function renderContent(){
    let contentRef = document.getElementById("renderContent");
    contentRef.innerHTML = "";
    contentRef.innerHTML += `   <div id="left${i}" class="left">
                                      
                                </div>
                                <div class="right">
                                    <div class="shopping_cart">
                                        <h3>Dein Warenkorb</h3>
                                            <div class="basket_content">
                                                <p>Name</p>
                                                <p>price</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
};
function renderOffers(){
    let offersRef = document.getElementById(`left${i}`);

    for (let i = 0; i < offers.length; i++) {
        offersRef.innerHTML += `<h2>${offers[i].type}</h2>
                                <div id="menu${i}" class="menu">
                                    <div id="name${i}">
                                        <h3>name</h3>
                                        <p>description</p>
                                        <p class="price">price€</p>
                                    </div>
                                    <div id="plus${i}" class="add">
                                        <p>+</p>
                                    </div>
                                </div>`
}
};

// add to basket + button
// calculate price
//  