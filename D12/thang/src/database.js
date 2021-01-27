const ShopItem = require('./models/shop-item.model');
const app = require('./server');
class database {
    constructor () {
        this.items = [];
        this.carts = [];
    }
    /**
     * 
     * @pagram { shopItem} item
     */
    createItem(item) {
        this.items.push(item);
    }
    getALLItems(){
        return this.items;
    }
    /**
     * 
     * @param {string} id
     * @returns {ShopItem} item
     */
    getItemById(id) {
        for(let i=0;i<this.items.lenght;i++){
            if (this.items[i].id == id){
                return this.items[i];
            }
        }
    }
}



module.exports = app;