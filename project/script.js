/*
В index.html
1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
которая имеет детальную информацию про объект на который кликнули*/

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {

        for (const key in users) {

            let userName = users[key]['name']
            let userid = users[key]['id']

            let block = document.createElement('div')
            let btnNext = document.createElement('a')

            btnNext.classList.add('btn-next')
            btnNext.innerText = 'User details'
            btnNext.href = 'user-details.html'

            block.classList.add('block')
            block.innerHTML = `<p>${userName}  ${userid}</p> `
            block.append(btnNext)
            document.body.append(block)

            let arrMans = JSON.parse(localStorage.getItem('user')) || [];
            btnNext.onclick = function ()  {
                let mans = users[key]
                let arr = {mans}
                arrMans.push(arr)
                localStorage.setItem('user', JSON.stringify(arrMans))
            }

        }


    })
