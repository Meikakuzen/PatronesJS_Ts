# Singleton

- El objetivo de un Singleton es que solo haya un objeto de esa clase
- Es un patrón creacional. Los patrones también pueden ser de estructura o de comportamiento
- Podemos usarlo cuando la percepción del objeto nunca va a cambiar, por ejemplo un calendario
- Creo una clase Singleton
- Puedo evaluar si ya existe esa clase, devolver el objeto
- Si no, lo creo

~~~js
class Singleton {
    
    constructor(){

        if(Singleton.instance){
            return Singleton.instance
        }

        Singleton.instance = this
    }
}
~~~


- Para comprobar que es el mismo puedo asignarle un número random
- Si hago la comparativa me devuelve true

~~~js
class Singleton {
    
    constructor(){
        this.random = Math.random()

        if(Singleton.instance){
            return Singleton.instance
        }

        Singleton.instance = this
    }
}

const Sing1 = new Singleton()

const Sing2 = new Singleton()

console.log(Sing1.random)
console.log(Sing2.random)

console.log(Sing1 === Sing2)
~~~

----

# Ejemplo

- En función del lenguaje cómo parámetro me devolverá los días de la semana en castellano o inglés
- Puedo usar un ternario en un método para hacer la evaluación

~~~js

class WeekDays {
    daysEs=[
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes"
    ]
    daysEn = [
        "Monday",
        "Twesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    constructor(lang){
        this.lang = lang

        if(WeekDays.instance){
            return WeekDays.instance
        }

        WeekDays.instance = this
    }

    getDays(){
        return this.lang === "es"? this.daysEs : this.daysEn
    }
}

const weekDays = new WeekDays("en")

console.log(weekDays.getDays())
~~~

- Si ahora hago una nueva instancia los días seguirán estando en inglés
-----

# Singleton en Typescript

- Instalo de forma global ts-node

> npm i -g ts-node

- Me servirá para ejecutar los archivos typescript en consola
- En Typescript hay modificadores para volver una propiedad privada
- Uso static porque va a pertenecer a la clase. Los valores que no sean estáticos pertenecen al objeto.
- Lo creo estático para poder usarlo dentro de la clase
- Le puedo decir el tipo de dato que es

~~~js
class SingletonTs{

    private static instance: SingletonTs
}
~~~

- No puedo acceder desde fuera a SingletonTs.instance
- Puedo poner privado el constructor para que no se pueda instanciar la clase y proporcionar un método para hacer un objeto
- Lo privado se puede utilizar dentro de la misma clase

~~~js
class SingletonTs{

    private static instance: SingletonTs
    public random: number

    private constructor(){
        this.random = Math.random()
    }

    public static getInstance(): SingletonTs{
        if(!this.instance){
             this.instance = new SingletonTs()
        }
        return this.instance
    }
}
~~~

- Para crear el objeto no puedo usar new pero puedo usar el método getInstance

~~~js
const singleton = SingletonTs.getInstance()
const singleton2 = SingletonTs.getInstance()

console.log(singleton === singleton2)
~~~

- El console.log devuelve un true




