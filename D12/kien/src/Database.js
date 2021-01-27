const ShopItem = require('./models/shop-item.model');
const app = require ('./server');

class database {
    constructor() {
        this.items = [];
        this.cart = [];
    }
    /**
     * 
     * @param {ShopItem} item 
     */
    createItem(item) {
        this.item.push(item);
    }
    /**
     * @returns {Array <ShopItem>} Shop item
     */
    getAllItem() {
        return this.item;
    }
    /**
     * 
     * @param {string} id 
     * @returns {ShopItem} found item
     */
    getItemById(id) {
        for (let i = 0; i < this.item.length; i++) {
            if (this.item[i].id == id){
                return this.item[id];
            }
        }
    }
}

module.exports = database;  