let arrUser = JSON.parse(localStorage.getItem('user'));
let userDetails = document.getElementsByClassName('user-details')
for (const key in arrUser) {
    let arr = arrUser[key]
    for (const keyKey in arr) {
        let arrNext = arr[keyKey]
        let block = document.createElement('div')
        block.innerHTML = `<p>Name - ${arrNext.name}</p> <p>Username - ${arrNext.username}</p> <p>Email - ${arrNext.email}</p> `

        let blockGeo = document.createElement('div')
        blockGeo.innerHTML = `<div>
                    <p>Street - ${arrNext.address.street}</p> <p> Suit - ${arrNext.address.suite}</p> <p>City -  ${arrNext.address.city}</p> <p> Zipcode - ${arrNext.address.zipcode}</p> 
                    </div><p>Geo lat - ${arrNext.address.geo.lat}</p> <p> Geo lng - ${arrNext.address.geo.lng}</p>`

        let blockInfo = document.createElement('div');
        blockInfo.innerHTML = `<p>Phone -  ${arrNext.phone}</p>  <p>Wesite - ${arrNext.website}</p>  <p>Company - ${arrNext.company.name}</p> 
<p>${arrNext.company.catchPhrase}</p> <p>${arrNext.company.bs}</p>`
        userDetails[0].append(block, blockGeo, blockInfo)
        let btn_posts = document.getElementById('btn_posts')
        btn_posts.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/users/' + arrNext.id + '/posts')
                .then(response => response.json())
                .then(posts => {
                    let listTitle = document.getElementsByClassName('list-title')
                    for (const post of posts) {
                        let wrapTitle = document.createElement('div')
                        wrapTitle.classList.add('wrap-title')
                        let title = document.createElement("h3")
                        let btnPostDetails = document.createElement('a')
                        btnPostDetails.href = `./post-details.html?data=${JSON.stringify(post)}`
                        btnPostDetails.innerText = 'post details'
                        title.innerText = post.title
                        wrapTitle.append(title, btnPostDetails)
                        listTitle[0].append(wrapTitle)

                        btnPostDetails.onclick = () => {

                        }
                    }
                })
        }

    }


}
