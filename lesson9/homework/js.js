// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let creatDiv = document.createElement('div')
// console.log(creatDiv)
creatDiv.classList.add('wrap', 'collapse', 'alpha', 'beta' )
creatDiv.innerText ='Text 1'
creatDiv.style.color= 'red'
creatDiv.style.fontSize= 50+'px'
// console.log(creatDiv)
let cloneCreatDiv = creatDiv.cloneNode(true)
document.body.append(creatDiv)
document.body.append(cloneCreatDiv)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menuProducts = document.getElementsByClassName('menu')
let products = ['Main','Products','About us','Contacts'];
for (const product of products) {
    let list = document.createElement('li');
    list.innerText = product;
    console.log(list.textContent)
    menuProducts[0].append(list)
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const elem of coursesAndDurationArray) {
    let elemBlock = document.createElement('div')
    elemBlock.innerText = `${elem.title} ${elem.monthDuration}`
    document.body.append(elemBlock)
}
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

document.write('<hr>')
for (const elem of coursesAndDurationArray) {
    let elemBlock = document.createElement('div');
    elemBlock.classList.add('item');

    let title = document.createElement('h1');
    title.classList.add('heading');
    title.innerText = elem.title;

    let description = document.createElement('p');
    description.classList.add('description');
    description.innerText = elem.monthDuration;

    elemBlock.append(title, description)

    document.body.append(elemBlock);
}