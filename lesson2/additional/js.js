// console.log('resolve')

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    console.log('Це великий масив в якому більше 3-х елементів')
} else {
    console.log('це маленький масив, в якому менше 3-х елементів')
}
let arrFriends = (friends.length >= 3) ? 'Це великий масив в якому більше 3-х елементів' : 'це маленький масив, в якому менше 3-х елементів';
console.log(arrFriends)
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
// Знайти, яке з них є середнім (більше одного, але менше за інше).

{
    let a = 16;
    let b = 14;
    let c = 22;
    let arr = [b, a, c];

    if (a > b && a < c || a > c && a < b) {
        console.log(1)
    } else if (b > a && b < c || b > c && b < a) {
        console.log(2)
    } else {
        console.log(3)
    }
    // Перевірити, чи знаходиться перше число між двома іншими.
    if (arr.indexOf(a) < arr.indexOf(b) && arr.indexOf(a) < arr.indexOf(c)) {
        console.log('Перше число знаходиться по лівій стороні')
    } else if (arr.indexOf(a) > arr.indexOf(b) && arr.indexOf(a) > arr.indexOf(c)) {
        console.log('Перше число знаходиться по правй стороні')
    } else (
        console.log('Перше число знаходиться по-середині')
    )


}

{
    // - Перепишіть конструкцію if з використанням умовного оператора '?':

    let a = 2;
    let b = 3;
    let result;
    if (a + b < 4) {
        result = 'Мало';
    } else {
        result = 'Багато';
    }
    console.log(result)

    let result1 = (a + b < 4) ? result = 'Мало' : result = 'Багато';
    console.log(result1)

}

// - Маємо будь-яке число від -100 , 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let a = -1;


let result = (a < 0) ? console.log('негативне') : (a === 0) ? console.log('дорівнює 0') : console.log('позитивне');