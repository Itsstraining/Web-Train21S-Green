const ItemProperties = require('./models/item-properties.model')

class Database{
    constructor(){
        // cần tạo mảng rỗng cho item và cart
        this.items = [];
        this.carts = [];
    }

    /**
     * 
     * @param {ItemProperties} item 
     */
    createItem(item){
        this.items.push(item);
    }

    /**
     * @returns {Array<ItemProperties>} tra ve thong tin san pham
     */
    getAllItems()
    {
        return this.items;
    }

    /**
     * 
     * @param {string} id
     * @returns {ItemProperties} san pham tim thay
     */
    getItemsByID(id){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].id == id)
            {
                return this.items[i];
            }
        }
    }

    /**
     * 
     * @param {string} id 
     */
    deleteItemsByID(id){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].id == id)
            {
               this.items.splice(i, 1)
            }
        }
    }
}

module.exports = Database;