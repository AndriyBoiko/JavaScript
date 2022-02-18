/*
- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

{
    id: 1,
        name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
    street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
        lat: '-37.3159',
            lng: '81.1496'
    }
},
    phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
    company: {
    name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
}
}*/


/*class User {
    constructor(id, name, surname, email, address, phone, website, company ) {
        this.id = id
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }


}

let asr = new User(1, 'Angea', 'lola', 'adsaxzs@mamil.ua', {
    street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {
        lat: '-37.3159',
        lng: '81.1496'
    },
}, '1-770-736-8031 x56442', 'hildegard.org', {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
})


console.log(asr)
*/


class User {
    constructor(id, name, surname, email, address, phone, website, company) {
        this.id = id
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address; // 11//22
        this.phone = phone;
        this.website = website;
        this.company = company; //1
    }

    adAddress() {
        let obj = {street: '', suite: '', city: '', zipcode: '', geo: {lat: '', lng: ''}}
        obj.street = prompt('Введіть вулицю', 'Kulas Light');
        obj.suite = prompt('Введіть suite', 'Apt. 556');
        obj.city = prompt('Введіть city', 'Gwenborough');
        obj.zipcode = prompt('Введіть zipcode', '92998-3874');
        obj.geo.lat = prompt('Введіть lat', '-37.3159');
        obj.geo.lng = prompt('Введіть lnt', '81.1496');
        this.address = obj;
    }

    companyInfo() {
        let info = {name: '', catchPhrase: '', bs: ''}
        info.name = prompt('Введіть name company', 'Romaguera-Crona');
        info.catchPhrase = prompt('Введіть catchPhrase company', 'Multi-layered client-server neural-net');
        info.bs = prompt('Введіть bs company', 'Romaguera-Crona');
        this.company = info
    }

}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', '', '1-770-736-8031 x56442', 'hildegard.org', '')
// user.adAddress()
// user.companyInfo()
// console.log(user)



/*
    -  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
    -назва тегу ()
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результуючого об'єкту
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]

}*/



