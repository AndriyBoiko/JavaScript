// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let n1 = document.forms[0]
let n2 = document.forms[1]
n1.text.innerText = '2123'
let btn = document.getElementById('btn')
btn.onclick = () => {
    console.log(n1.text.value)
    console.log(n1.useremail.value)
    console.log(n2.username.value)
    console.log(n2.age.value)
}


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let btn1 = document.getElementById('btn1');
btn1.onclick = () => {
    let tr = document.getElementById('numbers-tr');
    let td = document.getElementById('numbers-td');
    let txt = document.getElementById('txt');

    let tbl = document.getElementById('tbl');
    for (i = 0; i < tr.value; i++) {
        let tr = document.createElement('tr');
        for (j = 0; j < td.value; j++) {
            let td = document.createElement('th');
            td.innerText = txt.value
            tr.append(td);
        }
        tbl.append(tr);
    }

}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let arr = ['fuck', 'muck', 'rak']
let valueInput = document.getElementById('mats');
let btnOK = document.getElementById('mats-btn');
btnOK.onclick = () =>{
    for (const elem of arr) {
        let strVal = valueInput.value
        let a = /fuck/i.test(strVal)
        if (a){
            console.log('No mats')
        }else {
            console.log('good')
        }

        if (valueInput.value === elem) {
            alert('No mats')
            valueInput.value = ''
            return;

        } else {
            alert('Good boy')
            return;
        }
    }
    let strVal = valueInput.value
    let a = /fuck/i.test(strVal)
    if (a){
        console.log('No mats')
    }else {
        console.log('good')
    }
}



// let filtArr = arr.filter(word = () => {
//     if (valueInput.value === word) {
//         console.log(1)
//     } else {
//         console.log(2)
//     }
// })
