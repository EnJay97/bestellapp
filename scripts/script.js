
function init(){
    //getFromLocalStorage();
    renderOffers();
}

// offers anzeigen

function renderOffers(){
    let i = 0;
    let contentRef = document.getElementById("renderContent");
    contentRef.innerHTML = "";
    contentRef.innerHTML += `<h2>${offers[i].type}</h2>
                                <div class="left">
                                    <div id="menu${i}" class="menu"></div>
                                </div>
                                `

    for (let i = 0; i < offers.length; i++) {
        contentRef.innerHTML += `
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