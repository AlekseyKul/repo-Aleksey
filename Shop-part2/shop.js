// const goods = [
//     { title: "shirt", price: 150 },
//     { title: "socks", price: 50 },
//     { title: "Jacket", price: 350 },
//     { title: "Shoes", price: 250 }
// ];

// const renderGoodsItem = (title, price) => {
//     return `<div class = "magazin-item"> <h3> ${title} </h3> <p>${price}</p> </div>`
// };

// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join(' ');


//     document.querySelector(".magazin").innerHTML = goodsList;
// }

// renderGoodsList(goods);

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="magazin-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.magazin').innerHTML = listHtml;
    }
    totalPrice() {
        let total = 0;
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            total += goodItem.price
        });
        document.querySelector('.magazin').innerHTML += `<div class="magazin-item"><h3>${total}</h3></div>`;



    }
}
class listBascet {
    spisok = [];
    constructor(name) {
        this.name = name
        const goodItems = new GoodsList();
        goodItems.forEach(item => {
            if (item.title == name) {
                this.spisok.push(item)
            }
        })


    }

}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalPrice();