class ShopItem{
    /**
     * 
     * @param {number} price 
     * @param {string} name 
     * @param {string} id 
     * @param {number} inStock 
     * @param {number} discount 
     */
    constructor(price,name,id,inStock,discount){
        this.id = id;
        this.name = name;
        this.price = price;
        this.inStock = inStock;
        this.discount = discount;
    }
}