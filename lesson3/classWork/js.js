console.log('resolve')

/*
  Використовуючи данні з масиву, за допомоги document.write та циклу
  побудувати структуру по шаблону template1.1
  */
document.write(`<h1> template 1.1</h1>`)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (const listOfItem of listOfItems) {
    document.write(`<li> ${listOfItem}</li>`);
}
document.write('</ul>');
/*
Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
Шаблон застосувати до кожного об'єкта в масиві
*/
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];



    document.write(`<h1> template 2.2</h1>`);
document.write('<div class="wraps">')
    for (let i = 0; i < simpsons.length; i++) {
        document.write(` <div class="border"> Name -  ${simpsons[i].name} Surname -  ${simpsons[i].surname}  Age - ${simpsons[i].age}
        <p> ${simpsons[i].info}</p> <img src="${simpsons[i].photo}" alt="${simpsons[i].name}"> </div>`);
    }
document.write('</div>')

document.write(`<h1> template 2.1</h1>`)
document.write('<div class="wrap">')
for (let simpson of simpsons) {
    document.write('<div class="border">')
    document.write(`<h2> Name -  ${simpson.name}  Surname - ${simpson.surname} Age - ${simpson.age}</h2>
     <p> Info - ${simpson.info} </p> <br>
      <img src="${simpson.photo}" alt="${simpson.name}">`)
    document.write('</div>')
}
document.write('</div>')
// template 2.1

/*
Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
    */
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

console.log(products)
//
// < div >
// < div
// className = "product-card" >
//     < h3
// className = "product-title" > TITLE.Price - PRICE < /h3>
// <img src="" alt="" className="product-image">
// </div>

document.write(`<h1> template 3.1</h1>`)
document.write('<div class="product-wrap">')
for (const product of products) {
    document.write('<div class="product-card">')
    document.write(`<h3> ${product.title}</h3> <p>Price -  ${product.price} </p> <img class="product-image" src="${product.image}" alt="${product.title}">`)
    document.write('</div>')
}
document.write('</div>')




// Завдання з тхт

{
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    let numbers = [2,17,13,6,22,31,45,66,100,-18];
//    1. перебрати його циклом while

    let i = 0;
    while (i < numbers.length){
        document.write(numbers[i] + ' ')
        i++;
    }
//    2. перебрати його циклом for
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    for(let i=0; i <numbers.length; i++ ){
        document.write(numbers[i] + ' ' )
    }

    // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    let j = 0;

    while (j < numbers.length){
        if(numbers[j] % 2 !== 0){
        document.write(numbers[j] + ' ' )}
        j++;
    }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    for(let i=0; i <numbers.length; i++ ){
        if (numbers[i] % 2 !== 0){
        document.write(numbers[i] + ' ')}
    }

//  5. перебрати циклом while та вивести  числа тільки парні  значення
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    let k = 0;

    while (k < numbers.length){
        if(numbers[k] % 2 === 0){
            document.write(numbers[k] + ' ' )}
        k++;
    }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    for(let i=0; i <numbers.length; i++ ) {
        if (numbers[i] % 2 === 0) {
            document.write(numbers[i] + ' ')
        }
    }

// 7. замінити кожне число кратне 3 на слово "okten"

    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    for(let i=0; i <numbers.length; i++ ) {
        if (numbers[i] % 3 === 0) {
            document.write( 'okten ' +  " ")
        }
    }



//8. вивести масив в зворотньому порядку.
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    for (let i = numbers.length-1; i >= 0; i--){
        document.write( numbers[i] + ' ');
    }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`);
    i = numbers.length-1;
    while (i >= 0){
        document.write( numbers[i] + ' ');
        i--;
    }

    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    for(let i=numbers.length-1; i >=0; i-- ){
        document.write(numbers[i] + ' ' )
    }
    document.write(`<hr style="margin-top: 40px; border: 2px solid silver;">`)
    j = numbers.length-1;

    while (j >= 0){
        if(numbers[j] % 2 !== 0){
            document.write(numbers[j] + ' ' )}
        j--;
    }

}