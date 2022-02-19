// 1) Напишіть код, який :


//
//
//
//


//






// a) додає клас з назвою групи, елементу з ід main_header
let addMainHeader = document.getElementById('main_header')
addMainHeader.classList.add('linkList');

// b) робить шириниу елементу ul 400px
let addWidthUl = document.getElementsByTagName("ul");
for (const elem of addWidthUl) {
    elem.style.width='400px'
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width ='50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2
let textAdd = document.getElementsByClassName('listElement2');
for (const textAddElement of textAdd) {
    console.log(textAddElement.textContent);
}

//e) отримує всі елементи li та змінює ім колір фону на сірий
let searchLi = document.getElementsByTagName('li');
for (const elem of searchLi) {
    // elem.style.backgroundColor = 'blue'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let aSearch = document.getElementsByTagName('a')
for (const elem of aSearch) {
    elem.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let link3 = document.getElementsByClassName('listElement3')

for (const elem of aSearch) {
    if (elem.textContent === link3[0].textContent){
        elem.style.width += '40px'
        elem.style.backgroundColor ='green'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const elem of aSearch) {
    let txt = elem.textContent
    elem.classList.add('element_'+txt)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subheader = document.getElementsByClassName('sub-header')
// let WhatColor = prompt('Write color')
for (const elem of subheader) {
    elem.style.backgroundColor = /*WhatColor*/ 'yellow'
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const elem of subheader) {
    if(elem.textContent ==='content 2 segment'){
        elem.style.color = /*WhatColor*/ 'pink'
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тekст на довільний. Текст отримати з prompt()

// let TextProm = prompt('Write text')
let elContent = document.getElementsByClassName('content_1')
elContent[0].textContent = /*TextProm*/ 'asdasdasd'


// l) отримати елементи p та змінити їм padding на 20px

let elemP = document.getElementsByTagName('p')
for (const elem of elemP) {
    elem.style.padding ='20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elemText2 = document.getElementsByClassName('text2')

for (const elem of elemText2) {
    let perent = elem.parentElement.classList[0]
    elem.innerHTML = perent
}
// console.log(elemText2.parentElemetn);
