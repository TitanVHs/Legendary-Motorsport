let sortPriceButton = document.querySelector('.sortPriceButton');

carsJson.map(function(item) {
    const carEl = document.querySelector('.models .carItem').cloneNode(true);
    const catalogBody = document.querySelector('.catalogBody');

    carEl.querySelector('.carImage img').src = item.img;
    carEl.querySelector('.carInfo .carName').innerHTML = item.name;
    carEl.querySelector('.carInfo .carPrice').innerHTML = `$${item.price.toLocaleString()}`;

    catalogBody.append(carEl);
});