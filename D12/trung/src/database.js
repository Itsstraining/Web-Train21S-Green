const itemdetail = require('./models/item-detail.model')
class database{
    constructor(){
        this.item = [];
        this.cart = [];
    }
    /**
     * 
     * @param {itemdetail} Item 
     */
    addItems(Item){
        this.item.push(Item);

    }
    /**
     * @returns {Array<itemdetail>} Trả về hết
     */
    getAllitems(){
        return this.item;
    }
    /**
     * 
     * @param {string} id 
     * @returns {itemdetail} Trả về sản phẩm theo id
     */
    
     getItembyid(id){
        for(let i=0;i < this.item.length; i++)
        {
            if (this.item[i].id == id)
            {
                return this.item[i];
            }
        }
    }
    /**
     * 
     * @param {string} id 
     *
     */
    delectItembyid(id){
        for(let i=0; i< this.item.length; i++)
        {
            if (this.item[i].id == id)
            {
                this.item.pop(id);
            }
        }
    } 
}
module.exports = database;