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