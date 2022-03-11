// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


let txt = document.getElementById('txt')
let btn = document.getElementById('del').onclick = () => {
    txt.innerText = '';
}
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn1 = document.getElementById('btn').onclick = function () {
    this.style.display = 'none'
};
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.forms[0]
let write = document.getElementById('year')

form.onsubmit = function (e) {
    e.preventDefault();
    let numbs = form['years'].value
    if (numbs > 18) {
        write.innerText = 'Ваш вік більше 18'
    } else {
        write.innerText = 'Ваш вік менше 18'
    }

}

// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')
let list = document.getElementById('on').onclick = () => {
    menu[0].classList.toggle('disp')
    console.log(menu[0])
}

/*
- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    Вывести список комментариев в документ, каждый в своем блоке.
    Добавьте каждому комментарию по кнопке для сворачивания его body.*/


let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'Romero', body: 'Erfor sad saslsd alalskd asdas'}
]


let block = document.getElementsByClassName('block')
for (const comment of comments) {
    let titles = document.createElement('h3');
    let hiden = document.createElement('p');
    let btn = document.createElement('button')
    btn.innerText = 'hiden'

    titles.innerText = comment.title
    hiden.innerText = comment.body

    btn.onclick = () => {
        hiden.classList.toggle('disp')
    }

    block[0].append(titles, hiden, btn)
}



