// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this['id'] = id;
    this['name'] = name;
    this['surname'] = surname;
    this['email'] = email;
    this['phone'] = phone;

}

let arreyUser = [
    new User(12, 'Anna', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(2, 'Vasa', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(323, 'Anton', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(4, 'Lora', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(55, 'Kara', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(62, 'Rinaa', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(74, 'Olla', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(88, 'Lenna', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(94, 'Som', 'Lerona', 'asdax@mail.ua', '+3809123423'),
    new User(13, 'Terra', 'Lerona', 'asdax@mail.ua', '+3809123423')
]
console.log(arreyUser)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = arreyUser.filter(count => count.id % 2 === 0)
console.log(filter)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = arreyUser.sort((a,b) => a.id-b.id)
console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this['order'] = order;
    }
}

let arrClient = [
    new Client(12, 'Anna', 'Lerona', 'asdax@mail.ua', '+3809123423', ['Lemon', 'Orange', 'Cherry', 'tomato']),
    new Client(2, 'Vasa', 'Lerona', 'asdax@mail.ua', '+3809123423', ['Cherry', 'tomato', 'Fig', 'grape', 'Fig',]),
    new Client(323, 'Anton', 'Lerona', 'asdax@mail.ua', '+3809123423', ['Appel', 'Apricot']),
    new Client(4, 'Lora', 'Lerona', 'asdax@mail.ua', '+3809123423', ['Banana', 'berry']),
    new Client(55, 'Kara', 'Lerona', 'asdax@mail.ua', '+3809123423', ['Fig', 'grape']),
    new Client(62, 'Rinaa', 'Lerona', 'asdax@mail.ua', '+3809123423', ['mango', 'milk']),
    new Client(74, 'Olla', 'Lerona', 'asdax@mail.ua', '+3809123423', ['papay', 'peach']),
    new Client(88, 'Lenna', 'Lerona', 'asdax@mail.ua', '+3809123423', ['Plum', 'pear']),
    new Client(94, 'Som', 'Lerona', 'asdax@mail.ua', '+3809123423', ['ham', 'meat', 'egg']),
    new Client(13, 'Terra', 'Lerona', 'asdax@mail.ua', '+3809123423', ['bread', 'flour', 'soup'])

]
console.log(arrClient)

let sortClient = arrClient.sort((a, b)=> a.order.length - b.order.length)
console.log(sortClient)