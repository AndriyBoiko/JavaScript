// Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
console.log(Math.floor(Math.random() * 10)) // виводить в консоль рандомне число
let arr = [2, 15, 10, -23, 21, -7, 12, 25, 21, -71] // створив масив з 10 чисел
result = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9] // склав результат цих чисел в змінну
console.log(result) // вивів змінну
// console.log(arr.length)
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
{
    let book = {
        bookName: "Чорний Ворон",
        bookPages: 431,
        bookGen: "Історичний"
    };
    console.log(book);
}
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
{
    let book = {
        bookName: 'Характерник',
        bookGen: 'Бойовик',
        pages: 321,
        author: 'Автор'
    };
    console.log(book);
}
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
let book = [
    {
        name: 'Характерник',
        gen: 'Бойовик',
        pages: 431,
        author: 'Author 1'
    },
    {
        name: "Чорний Ворон",
        pages: 431,
        gen: "Історичний",
        author: 'Автор'
    },
    {
        name: "Book Red",
        pages: 131,
        gen: "Adventure",
        author: 'Автор Bok'
    },
    {
        name: "Family Red",
        pages: 131,
        gen: "Family",
        author: 'Автор Bok'
    },

]
// Вивести кожну книгу як окремий об'єкт
console.log(book[0], book[1])
// console.log(book[1])
console.log(book[2])
console.log(book[3])
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
s = height * width
console.log(`Площа прмокутника (${s})cm`)

// V = π R2 h
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let radius = dC / 2;
let r2 = Math.pow(radius, 2);
const PI = 3.14;
let V = PI * r2 * heightC;
console.log(V);

// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3
let m = 4
k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k)

