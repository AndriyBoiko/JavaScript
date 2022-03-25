let url = new URL(location.href)
let user = JSON.parse(url.searchParams.get('data'));
// console.log(user)
for (const key in user) {
    console.log(key)
}
let wrap = document.getElementsByClassName('wrap')
let title = document.createElement('h3')
title.innerText = user.title
let postBody = document.createElement('p')
postBody.innerText = user.body
let postId = document.createElement('span')
postId.innerText = user.id
wrap[0].append(title, postBody, postId)

let btnPostDetails = document.getElementsByClassName('btnPostDetails');

btnPostDetails[0].onclick = () =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
        .then(response => response.json())
        .then(comments => {
            let wrapPosts = document.getElementsByClassName('wrap-posts')
            for (const comment of comments) {
                let blockPosts = document.createElement('div')
                blockPosts.classList.add('block-post')
                let titleComment = document.createElement('h3')
                titleComment.innerText = comment.name
                let bodyComment = document.createElement('p')
                bodyComment.innerText = comment.body
                let emailComment = document.createElement('p')
                emailComment.innerText = comment.email
                blockPosts.append(titleComment, emailComment ,bodyComment)
                wrapPosts[0].appendChild(blockPosts)
            }

        })
}




