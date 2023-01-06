# Strategy

- Es un patrón de comportamiento
- Ayuda a tener comportamientos distintos de un objeto y a añadirle nuevos comportamientos sin tener que refactorizar el código inicial
- El contexto es el objeto central que va a unificar las cosas y es la clase del que vamos a hacer el objeto
- Las demás son para añadir funcionalidades
- Es de los patrones más usados
- Se basa en tener una clase contexto la cual tenga una estrategia y una acción. Esta acción va a ejecutar lo que tenga la estrategia.
- La estrategia se la vamos a añadir externamente, se pueden tener muchas
- Aquí ya no se necesita agregar nuevos casos a un switch o ifs, simplemente se crea una nueva estrategia
----
- Primero creo la clase contexto
- Le paso la strategia cómo parámetro en el constructor, necesaria para instanciar la clase
- La estrategia deberá tener un método llamado calculate a la que pasarle un monto desde el método calculate del contexto

~~~js
class SaleContext{
    
    constructor(strategy){
        this.strategy= strategy
    }

    calculate(amount){
        return this.strategy.calculate(amount)
    }
}
~~~

- Teniendo esto, ya puedo escribir las estrategias
- Creo una estrategia a la que pasarle un impuesto
- Genero una nueva instancia de la estrategia, le paso el impuesto.
- Esta instancia de la estrategia se la paso a la instancia del contexto
- Le paso el monto al método calculate

~~~js
class SaleContext{
    
    constructor(strategy){
        this.strategy= strategy
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

const regularSale = new RegularSaleStrategy(0.16)

const sale = new SaleContext(regularSale)

console.log(sale.calculate(10))
~~~

- Si quiero añadirle una nueva funcionalidad creo otra clase. Por ejemplo, un descuento

~~~js
class SaleDiscount{
    constructor(discount){
        this.discount = discount
    }

    calculate(amount){
        return amount - (amount * this.discount)
    }
}

const saleDiscount = new SaleDiscount(0.25)

const regularSaleDiscount = new SaleContext(saleDiscount)

console.log(regularSaleDiscount.calculate(100)) // 75
~~~

- La clase no tiene porqué tener un constructor, puede tener medios externos que guardan un valor conel cual hacer un cálculo
- Es útil crear un métdo para cambiar la estrategia

~~~js
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
~~~

- El patrón strategy sirve para cuando un objeto va a cambiar múltiples veces en tiempo de ejecución
-----

# Example






