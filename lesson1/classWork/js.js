// // console.log(Math.floor(Math.random()*10))
// let arrNumb = [2, 15, 10, -23, 21, -7, 12, 25, 21, -71]
// result = arrNumb.reduce(function(a, b) {
//     return a + b;
// });
// console.log(result)
// // console.log(arrNumb.length)

let book = {
    bookName: "Чорний Ворон",
    bookPages: 431,
    bookGen: "Історичний"
};
// console.log(book);
let book1 = {
    bookName: 'Характерник',
    bookGen: 'Бойовик',
    pages: 321,
    author: 'Автор'
};
// console.log(book1);

let books = [
    {
        bookName: 'Характерник',
        bookGen: 'Бойовик',
        bookPages: 431,
        author: 'Author 1'
    },
    {
        bookName: "Чорний Ворон",
        bookPages: 431,
        bookGen: "Історичний",
        author: 'Автор'
    },
    {
        bookName: "Book Red",
        bookPages: 131,
        bookGen: "Adventure",
        author: 'Автор Bok'
    },
    {
        bookName: "Family Red",
        bookPages: 131,
        bookGen: "Family",
        author: 'Автор Bok'
    },

]
console.log(books[0], books[1])
// console.log(books[1])
console.log(books[2])
console.log(books[3])

let height = 23;
let width = 10;
s = height*width
console.log(`Площа прмокутника (${s})cm`)

// V = π R2 h
//

let heightC = 10;
let dC = 4;
let radius = dC / 2;
console.log(radius);
let r2 = Math.pow(radius, 2);
const PI = 3.14;
let V = PI * r2 * heightC;
console.log(V);


//_-----------------------

// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3
let m = 4
k = Math.sqrt(Math.pow(n, 2)+ Math.pow(m, 2));
console.log(k)

