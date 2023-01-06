class SaleContext{
    
    constructor(strategy){
        this.strategy= strategy
    }
    
    setStrategy(strategy){
        this.strategy = strategy
    }

    calculate(amount){
        return this.strategy.calculate(amount)
    }
}

class RegularSaleStrategy{
    constructor(tax){
        this.tax = tax
    }

    calculate(amount){
        return amount + (amount * this.tax)
    }
  
}

class SaleDiscount{
    constructor(discount){
        this.discount = discount
    }

    calculate(amount){
        return amount - (amount * this.discount)
    }
}

class ForeignSaleStrategy{


    calculate(amount){
        return amount * this.getDollarPrice() 
    }

    getDollarPrice(){
        return 20
    }
}

const regularSale = new RegularSaleStrategy(0.16)

const sale = new SaleContext(regularSale)

const saleDiscount = new SaleDiscount(0.25)

sale.setStrategy(saleDiscount)

console.log(sale.calculate(100))

sale.setStrategy(new ForeignSaleStrategy())

console.log(sale.calculate(100))