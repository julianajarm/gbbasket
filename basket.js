let Basket = {
    goodList: [],
    countTotalPrice() {
        let result = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            result += this.goodList[i].good.price * this.goodList[i].count;
        }
        return result;
    },
    countTotalNumber() {
        let result = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            result += this.goodList[i].count;
        }
        return result;
    },
    addGood(good, count) {
        let search = this.goodList.find(function (item, i) {
            return item.good.name === good.name;
        });
        if (search === undefined) {
            this.goodList.push({
                good: good,
                count: count
            });
        } else {
            search.count += count;
        };


    },

    display() {
        let basketList = document.querySelector('.basket');
        let list = '';
        if (this.goodList.length === 0) {
            basketList.innerHTML = 'Корзина пуста';
            return;
        };
        this.goodList.forEach (function (item, i) {
            list += '<li>' + item.good.name + ': ' + item.good.price + ' x' + item.count + '</li>';
        });

        basketList.innerHTML = '<ul>' + list + '</ul>';

        basketList.insertAdjacentHTML('beforeend', 'В корзине: ' + this.countTotalNumber() + ' товаров на сумму ' + this.countTotalPrice() + ' рублей.');

    },
    
};

let goods = [
    {
        name: 'Cat',
        price: 1000,
    },
    {
        name: 'Dog',
        price: 1500,
    },
    {
        name: 'Elephant',
        price: 3000,
    },
        ];

function displayProducts(products) {
    let productsList = document.querySelector('.products');
    let list = '';
    for (let i = 0; i < products.length; i++) {
        list += '<li>' + products[i].name + ': ' + products[i].price + '<button class="buyBtn">Добавить</button>' + '</li>';
    };
    productsList.innerHTML = '';
    productsList.innerHTML += '<ul>' + list + '</ul>';

    let buttons = document.getElementsByClassName('buyBtn');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            Basket.addGood(goods[i], 1);
            Basket.display();
        });
    };
};

displayProducts(goods);
Basket.display();
