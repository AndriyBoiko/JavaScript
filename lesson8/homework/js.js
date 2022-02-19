/*
- Напишіть код,  котрий :







*/

// -- отримує текст з параграфа з id "content"
let byIdContent = document.getElementById('content');
console.log(byIdContent)
// -- отримує текст з блоку з id "rules"
let byIdRules = document.getElementById('rules')
console.log(byIdRules.textContent);

// -- замініть текст параграфа з id 'content' на будь-який інший
byIdContent.innerText = 'Embed up-to-date data from caniuse.com and mozillas browser compat data. Displays feature support data for multiple versions of the 10 major browsers. Configurable, reliable, and fully responsive'

// -- замініть текст параграфа з id 'rules' на будь-який інший
byIdRules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At hic itaque nesciunt obcaecati sed tempore.'

// -- змініть кожному елементу колір фону на червоний

let allTag = document.body.children;
for (const key of allTag) {
    // -- змініть кожному елементу колір фону на червоний
    key.style.backgroundColor ='red'
    // -- змініть кожному елементу колір тексту на синій
    key.style.color ='blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(byIdRules.classList);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний
let classFcRules = document.getElementsByClassName('fc_rules')
for (const classFcRule of classFcRules) {
    classFcRule.style.color = 'red'
}
