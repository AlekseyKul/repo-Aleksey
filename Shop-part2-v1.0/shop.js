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









// class GoodsItem {
//     constructor(title, price) {
//         this.title = title;
//         this.price = price;
//     }
//     render() {
//         return `<div class="magazin-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
//     }
// }



// class GoodsList {
//     constructor() {
//         this.goods = [];
//     }
//     fetchGoods() {
//         this.goods = [
//             { title: 'Shirt', price: 150 },
//             { title: 'Socks', price: 50 },
//             { title: 'Jacket', price: 350 },
//             { title: 'Shoes', price: 250 },
//         ];
//     }
//     render() {
//         let listHtml = '';
//         this.goods.forEach(good => {
//             const goodItem = new GoodsItem(good.title, good.price);
//             listHtml += goodItem.render();
//         });
//         document.querySelector('.magazin').innerHTML = listHtml;
//     }
//     totalPrice() {
//         let total = 0;
//         this.goods.forEach(good => {
//             const goodItem = new GoodsItem(good.title, good.price);
//             total += goodItem.price
//         });
//         document.querySelector('.magazin').innerHTML += `<div class="magazin-item"><h3>${total}</h3></div>`;



//     }
// }


// const list = new GoodsList();
// list.fetchGoods();
// list.render();
// list.totalPrice();

////////////////////////////////////////////////////////////////////////////////Ot prepoda//////////////////////////////////////////////////////////////////////////////////////
class List {
    items = []

    constructor() {
        let goods = this.fetchGoods()
        console.log(goods)
        goods = goods.map(cur => {
            return new GoodItem(cur)
        })
        console.log(goods)

        this.items.push(...goods)
        console.log(this.items)
        this.render()
    }

    fetchGoods() {
        return [
            { name: 'Shirt', price: 150 },
            { name: 'Socks', price: 15 },
            { name: 'Jacket', price: 50 },
            { name: 'Shoes', price: 1500 },
        ]
    }

    render() {
        // console.log(this.items)
        this.items.forEach(good => {
            good.render()
        })
    }
}

class GoodItem {
    name = ''
    price = 0

    constructor({ name, price }) {
        this.name = name
        this.price = price
    }

    render() {
        const placeToRender = document.querySelector('.magazin')
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerHTML = `Товар: ${this.name} = ${this.price}`
            placeToRender.appendChild(block)
        }
    }
}

const ListInstance = new List()


class Bascet {
    items = []
    goods = []

    constructor(goods) {

        this.goods = goods


        goods = goods.map(cur => {
            return new GoodItem(cur)
        })


        this.items.push(...goods)

        this.render()
    }



    render() {
        // console.log(this.items)
        this.items.forEach(good => {
            good.render()
        })
    }
}