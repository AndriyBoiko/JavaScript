/*- Дано список імен.
    let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'*/
// let n3 = 'Hermione Granger'
let n2 = 'Ron+++++Whisley'
let n3 = 'Hermione________Granger'

let nameValid = (str, val) => {
    name = str.replaceAll(val, ' ');
    return name.split(' ').filter(n => n).join(' ');
}
console.log(nameValid(n2, '+'))

// s = n2.split(' ').filter(n => n).join(' ');
// console.log(s)

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let arr =[]
let fnCreator = (counter) => {
    arr = [];
    for (let i = 0; i < counter; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}
let array = fnCreator(10)
console.log(array)

let array1 = [28, 21, 86, 83, 11, 20, 50, 61, 4, 74]
// console.log(array1)
console.log(array.sort())
console.log(array.filter(n => n % 2 === 0))

// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let transformToStr = (arr) => {
    return arr.map(elem => elem.toString())
}
console.log(transformToStr(array1))

let sortNums = (arr, direction) => {
    if (direction === '-') {
        return arr.sort((a, b) => a - b)
    }
    return arr.sort((a, b) => b - a)
}
console.log(sortNums(array1, '-'))


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let Month5 = coursesAndDurationArray.filter(user => user.monthDuration > 5)
for (const course of Month5) {
    console.log(course)
}
// -- відсортувати його за спаданням за monthDuration
//                 1.0
let sortCourse = (filed) => {
    return (a, b) => b[filed] > a[filed] ? 1 : -1;
}
console.log(coursesAndDurationArray.sort(sortCourse('monthDuration')))

// -- відсортувати його за спаданням за monthDuration
//                      2.0
// coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration )
// console.log(coursesAndDurationArray)





// console.log(sortCourse)