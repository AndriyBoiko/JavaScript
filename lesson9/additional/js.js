// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того,
//     що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let arrH2 = []
function scrapper(startelement){
    let children = startelement.children
    for (const child of children) {
        if (child.localName === 'h2' ){
           let title = child.textContent
            arrH2.push(title)
        }
        scrapper(child)
    }
}
scrapper(document.body)

let wrap = document.createElement('div')
wrap.setAttribute('id', 'content')

let menu = document.createElement('ul')

for (const heads of arrH2) {

    let list = document.createElement('li')
    list.innerText = heads

    wrap.appendChild(menu)
    menu.append(list)
    document.body.append(wrap)
}

//---------------------------------------------------------------