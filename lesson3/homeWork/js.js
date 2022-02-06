// console.log('resolve')
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let arrNumbs = [24, -3, 21.5, 103, -15, 'About', 'Main', 'Alex', 'Home', 'Lego', true, false];
// let arrStr = ['About', 'Main', 'Alex', 'Home', 'Lego'];

for (let arrNumb of arrNumbs) {
    // console.log(arrNumb)
}
for (let i = 0; i < arrNumbs.length; i++){
    // console.log(arrNumbs[i]);
}
let j = 0
while (j < arrNumbs){
    // console.log(arrNumbs[j])
    j++
}

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// {
//     let arr = [];
//     arr.push('Apple');
//     arr.push('Orange');
//     arr.push('tomatto');
//     arr.unshift('Bred')
//     arr.push('milk')
//     arr.unshift('potato')
//     console.log(arr[0])
//     console.log(arr[2])
//     console.log(arr[1])
//     console.log(arr[3])
//     console.log(arr[4])
//     console.log(arr[5])
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// {
//     for (let i = 0; i <= 10; i++){
//         document.write(`<div> Write me 10</div>`)
//     }
//     for (let i = 0; i <= 10; i++){
//         document.write(`<div> ${i} -  Write me 10 and my nummbers</div>`)
//     }
//
//     let j=0
//     while (j <= 20){
//         document.write(`Title h1 20 <br>`)
//         j++
//     }
//     let k=0
//     while (k <= 20){
//         document.write(`Title h1 and my numbers - ${k} <br>`);
//         k++;
//     }
// }








{
    // Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
    let arrNumbers = [ 2, -3, 5, 3, -22, -24, 22.5, 234, 768, -245];

    for (let number of arrNumbers) {
        // console.log(`${number} - `);
    }
    for (let i = 0; i < arrNumbers.length; i++){
        console.log(`${arrNumbers[i]} my number in arr - ${i}`);
    }

    let j = 0;
    while (j < arrNumbers.length ){
        document.write(`<div> ${arrNumbers[j]} </div>`)
        j++;
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.+
    let arrString = ['машина', 'auto', 'bmw', 'artists', 'musics', 'trees', 'lemon', 'errors', 'elements', 'lorem'];

    for (const string of arrString) {
        console.log(string);
    }
    for (let i =0; i< arrString.length; i++){
        console.log(`My number - ${i} - ${arrString[i]} `)
    }

    let k = 0;
    while (k < arrString.length){
        document.write(`<div>My numbers i arr - ${k} - ${arrString[k]} </div>`)
        k++;
    }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
    let arr = ['jobs', 24, 55, -34, true, 'lessons', 'enter', false, 'logout', 11]
    for (let arrElement of arr) {
        document.write(`<div style="color: red;"> ${arrElement}</div>`)
    }
    for (let i = 0; i < arr.length; i++){
        document.write(`<div style="color: green;"> ${arr[i]}</div>`)
    }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

    let arrIf = ['Lorem', 'ipsum', 'dolor', 'sit', true, false, 1, 5, 6];
        for (let arrIfElement of arrIf) {
            if (typeof arrIfElement == "boolean"){
            document.write(`<div style="color: orange;"> ${arrIfElement}</div>`)
            }
        }

        for (let i =0; i < arrIf.length; i++){
            if (typeof arrIf[i] == "boolean"){
                document.write(`<div style="color: orchid;"> ${arrIf[i]}</div>`)
            }
        }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

    for (let arrIfElement of arrIf) {
        if (typeof arrIfElement == 'number'){
            document.write(`<div style="color: darkgreen;"> ${arrIfElement}</div>`)
        }
    }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
    for (let i =0; i < arrIf.length; i++ )
        if ( typeof arrIf[i] == 'string'){
            document.write(`<div style="color: royalblue;"> ${arrIf[i]}</div>`)
    }

}

{







    // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
    let arr = [];
    arr[0] = ('Lemon');
    arr[1] = (13);
    arr[2] = (15);
    arr[3] = true;
    arr[4] = false;
    arr[5] = 'Green';
    arr[6]='Red';
    arr[7] = 'Went';
    arr[8] = 'Audi';
    arr[9] = true;

    for (const arrElement of arr) {
        console.log(arrElement);
    }

    for (let i =0; i < arr.length; i++){
        console.log(arr[i]);
    }

    let j = 0;
    while (j < arr.length){
        console.log(arr[j])
        j++;
    }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for (let i = 0; i<10; i++){
        console.log(i)
        document.write(`<p> ${i}</p>`)
    }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    for (let i = 0; i<100; i++){
        console.log(i)
        document.write(`<p> ${i}</p>`)
    }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
    for (let i = 0; i<100; i +=2){
        console.log(i)
        document.write(`<p> ${i}</p>`)
    }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
    for (let i = 0; i < 100; i++){
        if (i % 2 === 0){
            console.log(i)
            document.write(`<p> ${i}</p>`)
        }
    }
    for (let i = 0; i < 100; i +=2){
            console.log(i)
            document.write(`<p> ${i}</p>`)
    }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    for (let i = 0; i < 100; i++){
        if (i % 2 !== 0){
            console.log(i)
            document.write(`<p> ${i}</p>`)
        }
    }
    for (let i = 1; i < 100; i++){
            console.log(i)
            document.write(`<p> ${i}</p>`)
    }
}