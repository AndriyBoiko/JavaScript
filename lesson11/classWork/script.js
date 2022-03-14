let favorite = JSON.parse(localStorage.getItem('favorites'))

for (const user of favorite) {
   let block = document.createElement('div')
    block.innerText = `Name - ${user.name} / / Age -  ${user.age}  / /  Status - ${user.status}`
    document.body.append(block)
}