/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/


function Car (model, creator, dateStart, maxSpeed, volume){
    this.model = model;
    this.creator = creator;
    this.dateStart = dateStart;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function (){
        console.log(`Model - ${this.model}| Creator - ${this.creator} | Рік випуску - ${this.dateStart} | Максимальна швидкість - ${this.maxSpeed} | Об'єм двигуна - ${this.volume}`)
    };

    this.newMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed
        console.log(this.maxSpeed)
    };

    this.changeYear = function (newValue) {
        this.dateStart = newValue;
        console.log(this.dateStart)
    };

    this.addDrive= function (driver){
        this.driver = driver
        console.log(this.driver)
    };
}

let car = new Car('bmw', 'people', 2005, 230, 2.0 )
// let car2 = new Car('Audi', 'people', 2005, 230, 2.0 )
car.drive();
car.info();

car.newMaxSpeed(40);
car.changeYear(2000);
car.addDrive('Petro');


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {

    constructor(model, creator, dateStart, maxSpeed, volume) {
        this.model = model;
        this.creator = creator;
        this.dateStart = dateStart;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    };

    drive(){
        console.log(`Їдемо зі швидкістю ${this} на годину`)
    };
    info(){
        for (const key in this) {
            console.log(`${key} - ${this[key]}`)
        }

    };
    increaseMaxSpeed (newSpeed){
        this.maxSpeed += newSpeed
        console.log(this.maxSpeed)
    };
    changeYear (newValue){
        this.dateStart = newValue;
    }
    addDriver (driver){
        this.driver = driver;
    }
}

let car2 = new Cars('Audi', 'people', 2005, 230, 2.0 );

car2.info();
car2.increaseMaxSpeed(120);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelushka {

    constructor(names, age, footSize) {
        this.names = names;
        this.age = age;
        this.footSize = footSize;
    };
}

let arrPop = [
    new Popelushka('Luiza', 22, 36),
    new Popelushka('Maasha', 32, 37),
    new Popelushka('Roza', 19, 39),
    new Popelushka('Olga', 43, 36),
    new Popelushka('Myra', 26, 35),
    new Popelushka('Eva', 33, 37),
    new Popelushka('Ira', 29, 36),
    new Popelushka('Kara', 24, 39),
    new Popelushka('Alaa', 22, 29),
    new Popelushka('Oksa', 26, 38),
];

class Prince{

    constructor(names, age, shoseFind) {
        this.names = names;
        this.age = age;
        this.shoseFind = shoseFind;
    }
}

let prince = new Prince('Oleg', 23, 39);

// console.log(prince)

const wedding = arrPop.find( (shoes) => shoes.footSize === prince.shoseFind);
console.log(wedding)