//- створити функцію яка обчислює та повертає площу прямокутника висотою

let arrowSq = (a, b) => a * b;
console.log(arrowSq(10, 20));

//- створити функцію яка обчислює та повертає площу кола

let calcCircle = (r) => 2 * 3.14 * r;
console.log(calcCircle(13));

//- створити функцію яка обчислює та повертає площу циліндру

let calcCylinder = (r, h) => 2 * 3.14 * r * h;
console.log(calcCylinder(10, 12));

//- створити функцію яка приймає масив та виводить кожен його елемент
let arrFree = [10, true, 'lalala', 'het', false, -20]
let arrayWatch = (arr) => {
    for (const arrElement of arr) {
        document.write(arrElement + ' ')
    }
}

arrayWatch(arrFree);

let creatP = (msg) => document.write(`<p>${msg}</p>`);

creatP('lalalalla')
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let creatList = (msg) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${msg}</li>`);
    }
    document.write('</ul>');
}

creatList('create me');

//- створити функцію яка  створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createListWithFor = (msg, counter) => {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${msg}</li>`);
    }
    document.write('</ul>');
}

createListWithFor('create 5 li', 5)

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createLiforArr = (arr) => {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write('</ul>');
}
createLiforArr(arrFree);

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrPerson = [{
    id: 97,
    name: 'quas fugiat ut perspiciatis vero provident',
    age: 22
},
    {
        id: 98,
        name: 'Leo',
        age: 12
    },
    {
        id: 99,
       name: 'Lola',
       age: 34
    },
    {
        id: 100,
        name: 'Artue',
       age: 20
    }]
let fnObj = (obj) =>{
    for (const objElement of obj) {
        document.write(`<p> id - ${objElement.id} name - ${objElement.name} age - ${objElement.age}</p>`)
    }
}
fnObj(arrPerson);