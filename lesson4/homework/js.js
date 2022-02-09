// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareRectangle(a, b) {
    return a * b;
}

squareRectangle(12, 22);
console.log(squareRectangle(12, 22));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(r) {
    return 3.14 * (r * r);
}

console.log(squareCircle(22))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(h, r) {
    return 2 * 3.14 * h * r;

}

console.log(squareCylinder(10, 20));

//- створити функцію яка приймає масив та виводить кожен його елемент
let sas = ['Lorem', 'ipsum ', 'dolor', 'sit', 'amet.']

function returnArrElm(arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}

returnArrElm(sas)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function creatP(txt) {
    document.write(`<p>${txt}</p>`)
}

creatP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magnam.')
creatP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque illum molestiae obcaecati placeat quaerat quo quos, sequi vero voluptatem.')
// тут я просто створив функцію яка робить document.write стільки скільки мені треба
function creatDocumetWrite(counter, message) {
    for (let i = 0; i < counter; i++) {
        document.write(`${message}`)
    }
}

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(a) {
    creatDocumetWrite(1, `<ul>`)
    creatDocumetWrite(3, `<li>${a}</li>`)
    creatDocumetWrite(1, `</ul>`)
}

createList('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUl(a, counter){
    creatDocumetWrite(1, `<ul>`)
    creatDocumetWrite(`${counter}`, `<li>${a}</li>`)
    creatDocumetWrite(1, `</ul>`)
}


createUl('list', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrElements = [1, 'asd', '131asdasda', true, false, 32]
let asdf = ['test', 'alalal', 'red','sdada', true, 243, 500, false]
function arrElem(arr){
    creatDocumetWrite(1, `<ul>`)
    for (const arrElement of arr) {
        creatDocumetWrite(  1, `<li>${arrElement}</li>`)
    }
    creatDocumetWrite(1, `</ul>`)
}

arrElem(arrElements)
arrElem(asdf)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let arr1 = [
    { id: 1,
        name: 'Lola',
        age: 22
}, {
    id: 2,
        name: 'Roma',
        age: 43
    }]
function arrPerson (arrobj){
    for (const arrobjElement of arrobj) {
        console.log(`id - ${arrobjElement.id}`)
        console.log(`Name - ${arrobjElement.name}`)
        console.log(`Age - ${arrobjElement.age}`)
    }
}

arrPerson(arr1)