
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
    contentRef.innerHTML += `<h2>${offers[i].type}</h2>
                                <div class="left">
                                    <div id="menu${i}" class="menu"></div>
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
                                </div>
                                `
};
function renderOffers(){
    let offersRef = document.getElementById(`menu${i}`);
    offersRef.innerHTML = "";

    for (let i = 0; i < offers.length; i++) {
        offersRef.innerHTML += `
                                <div id="name${i}">
                                    <h3>Name</h3>
                                    <p>description</p>
                                    <p class="price">price</p> 
                                </div>
                                <div id="plus${i}" class="add">
                                    <p>+</p>
                                </div>`
}
};

// add to basket + button
// calculate price
//  