// console.log('resolve')
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = 111;
let b = 15;

if (a === b ){
    console.log( 'Ви ввели однакові числа');
}else{
    let max = Math.max(a, b);
    console.log(max);
}
let mathnumb = (a === b) ? 'ви ввели рівні числа' : Math.max(a, b);
console.log(mathnumb);


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let house = -55;

if (house >= 1 && house <= 20){
    console.log('Підїзд 1')
} else if (house > 20 && house <= 48){
    console.log('Підїзд 2')
} else if (house > 48 && house <= 90){
    console.log('Підїзд 3')
} else{
    console.log('Ви ввели неіснуючий поверх')
}
// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
c = 10;
let number = (c === 10 ) ? 'Вірно' : 'Не вірно';
console.log(number)

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 4.
// якщо в змінну записали щось інше, спрацьовує else

{
    let x = [2,3,4];
    let b = typeof x;
    if (b === 'number'){
        console.log(1)
    }
    else if (b === 'string'){
        console.log(2)
    }
    else if (b === 'boolean'){
        console.log(3)
    }else if (b === 'object'){
        console.log(4)
    }
    else{
        console.log("щось інше")
    }

}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let goOkten = 12;

if (goOkten >= 10 && goOkten <= 22 ){
    console.log('ми йдемо ВЧИТИСЯ');
}else{
    console.log('сидимо вдома і вчимося ОНЛАЙН');
}

let learn = (goOkten >= 10 && goOkten <= 22 ) ? 'ми йдемо ВЧИТИСЯ': 'сидимо вдома і вчимося ОНЛАЙН';
console.log(learn);

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне

{
    let numbers = 2;
    switch (numbers) {
        case 1:
            console.log("Авто");
            break;
        case 2:
            console.log("Телефон");
            break;
        case 3:
            console.log("Велосипед");
            break;
        case 4:
            console.log("Ноут");
            break;
        case 5:
            console.log("Мото");
            break;
        default:
            console.log( "Повезе іншим разом");
            break;
    }

}