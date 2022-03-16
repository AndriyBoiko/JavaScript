// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let wrap = document.getElementsByClassName('wrap')
        let menu = document.createElement('ul')

        for (const post of posts) {
            let list = document.createElement('li')
            list.classList.add('list');
            list.innerText = post.title
            let btn = document.createElement('button')
            btn.classList.add('btn')
            btn.innerText = 'show'
            list.append(btn)
            menu.append(list)


            btn.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {

                                let card = document.createElement('div')
                                card.classList.add('card')
                                card.innerHTML = `<h3 class="title"> ${comment.name} </h3> 
                                                    <p class="email"> ${comment.email}</p>
                                                    <p class="txt"> ${comment.body} </p>`
                                list.append(card)
                            }

                            let close = document.createElement('button')
                            close.classList.add('close')
                            close.innerText = 'close'

                            list.appendChild(close)
                            close.onclick = () => {
                                let arrChildren = list.children
                                for (i = 1; i <= arrChildren.length - 1; i++) {
                                    arrChildren[i].classList.add('hiden')
                                }
                            }

                    })

            }

        }

        wrap[0].append(menu)
    })