let catalogBody = document.querySelector('.catalogBody');
let sortPriceButton = document.querySelector('.sortPriceButton');
let carEl = document.querySelector('.models .carItem');


carsJson.map(function(item) {
    const carEl = document.querySelector('.models .carItem').cloneNode(true);

    carEl.querySelector('.carImage img').src = item.img;
    carEl.querySelector('.carInfo .carName').innerHTML = item.name.toUpperCase();
    carEl.querySelector('.carInfo .carPrice').innerHTML = `$${item.price.toLocaleString()}`;

    catalogBody.append(carEl);
});

sortPriceButton.addEventListener('click', function() {
    sortPriceButton.classList.toggle('a');

    if(sortPriceButton.classList.contains('a')) {
        sortPriceButton.innerHTML = 'Organizar por preço <i class="ri-arrow-up-s-line"></i>';
        carsJson.sort(function(a, b) {
            return a.price - b.price;
        });
    } else {
        sortPriceButton.innerHTML = 'Organizar por preço <i class="ri-arrow-down-s-line"></i>';
        carsJson.sort(function(a, b) {
            return b.price - a.price;
        });
    }

    catalogBody.innerHTML = '';
  
    let delay = 0;
  
    carsJson.map(function(item) {
      setTimeout(function() {
        const carEl = document.querySelector('.models .carItem').cloneNode(true);
  
        carEl.querySelector('.carImage img').src = item.img;
        carEl.querySelector('.carInfo .carName').innerHTML = item.name.toUpperCase();
        carEl.querySelector('.carInfo .carPrice').innerHTML = `$${item.price.toLocaleString()}`;

        catalogBody.append(carEl);
      }, delay);
  
      delay += 100;
    });
});