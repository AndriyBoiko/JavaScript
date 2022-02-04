// console.log('resolve')
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 36;

if (time > 0 && time <= 15) {
    console.log('Перша чверть');
} else if (time > 15 && time <= 30) {
    console.log('Друга чверть');
} else if (time > 30 && time <= 45) {
    console.log('Третя чверть');
} else if (time > 30 && time < 60) {
    console.log('Четверта чверть');
} else {
    console.log('Годинник вийшов з чату попробуйте інше число');
}

let clock = (time > 0 && time <= 15) ? 'Перша чверть' : (time > 15 && time <= 30) ? 'Друга чверть' : (time > 30 && time <= 45)
    ? 'Третя чверть' : (time > 30 && time < 60) ? 'Четверта чверть' : 'Годинник вийшов з чату попробуйте інше число';
console.log(clock);
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let
    day = 1;

if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга Декада');
} else if (day > 20 && day <= 31) {
    console.log('Третя Декада');
} else {
    console.log('Місяць має всього 31 день ');
}

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

{
    let test = false;
    if (!!!test) {
        console.log("Вірно");
    } else {
        console.log("Не вірно");
    }

    let test1 = !!!test ? "Вірно" : "Не вірно";
    console.log(test1)
}

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно',
// інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
{
    let a = 0
    if (a !== 0) {
        console.log('Вірно');
    } else {
        console.log('Не вірно');
    }

    let b = (a !== 0) ? "Вірно" : "Не вірно";
    console.log(b)
}

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

{
    let days = 7;

    switch (days) {
        case  1:
            console.log('Monday йди поїж');
            break;
        case  2:
            console.log("Tuesday ти поїв вчора ");
            break;
        case  3:
            console.log("Wednesday піди купи їсти");
            break;
        case 4 :
            console.log("Thursday Ти можеш приготувати їсти");
            break;
        case  5:
            console.log("Friday Готуй їсти");
            break;
        case  6:
            console.log("Saturday нехай їжа постоїсть набере смаку");
            break;
        case  7:
            console.log('Sunday ти завтра знову зможеш поїсти');
            break;
    }
}

// Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4
{
    let years = +prompt('Введіть рік');
    if (years % 4 === 0) {
        console.log('рік високосний');
        // alert('рік високосний');
    } else {
        console.log('рік Не високосний');
        // alert('рік Не високосний');
    }

    let years1 = (years % 4 === 0) ? 'рік високосний' : 'рік Не високосний';
    console.log(years1);
    // alert(years1);
    document.write(`<h2> ${years1} </h2>`)
}
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

{
    let nameJs = 'ecmascript'
    let wthJs = prompt('Яка офіційна назва JavaScript').toLowerCase();

    if (nameJs === wthJs) {
        alert('Правильно!');
    } else {
        alert('Не знаєте? ECMAScript!');
    }

    let test = (nameJs === wthJs) ? alert('Правильно!') : alert('Не знаєте? ECMAScript!');
    console.log(test);

}