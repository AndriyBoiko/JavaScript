/*Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
Для кожного елементу свій блок div.post
Всі характеристики повинні мати свої блоки всередені div.post
https://jsonplaceholder.typicode.com/posts*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let wrap = document.getElementsByClassName('wrap')
        for (const post of posts) {
            let block = document.createElement('div')
            block.classList.add('block')
            // block.innerHTML = `  <h2 class="title">${post.title}</h2> <p class="txt"> ${post.body} </p> <span class="numb"> ${post.id}</span>`

            wrap[0].append(block)
        }
    })


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        let wrap = document.getElementsByClassName('wrap')
        for (const coment of comments) {
            let block = document.createElement('div')
            block.classList.add('block')
            block.innerHTML = `  <h2 class="title">${coment.name}</h2>
                                  <p class="txt"> ${coment.body} 
                                  <p class="email"> ${coment.email} 
                                </p> <span class="numb"> ${coment.id}</span>`

            wrap[0].append(block)
        }
    })