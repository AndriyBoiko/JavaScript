// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
  let hello = "hello";
  let owu = "owu";
  let com = "com";
  let ua = "ua";
  let one = 1;
  let ten = 10;
  let n999 = -999;
  let n123 = 123;
  let pi = 3.14;
  let n27 = 2.7;
  let n16 = 16;
  let bullTru = true;
  let bullFalse = false;
//     Вивести кожну змінну за допомогою: console.log
  console.log(hello);
  console.log(owu);
  console.log(com);
  console.log(ua);
  console.log(one);
  console.log(ten);
  console.log(n999);
  console.log(n123);
  console.log(pi);
  console.log(n27);
  console.log(n16);
  console.log(bullTru);
  console.log(bullFalse);

//Вивести кожну змінну за допомогою: document.write
  document.write(`<p>${hello}</p>`);
  document.write(`<p>${owu}</p>`);
  document.write(`<p>${com}</p>`);
  document.write(`<p>${ua}</p>`);
  document.write(`<p>${one}</p>`);
  document.write(`<p>${ten}</p>`);
  document.write(`<p>${n999}</p>`);
  document.write(`<p>${n123}</p>`);
  document.write(`<p>${pi}</p>`);
  document.write(`<p>${n27}</p>`);
  document.write(`<p>${n16}</p>`);
  document.write(`<p>${bullTru}</p>`);
  document.write(`<p>${bullFalse}</p>`);

// Вивести кожну змінну за допомогою:  alert,
  alert(hello)
  alert(owu)
  alert(com)
  alert(ua)
  alert(one)
  alert(ten)
  alert(n999)
  alert(n123)
  alert(pi)
  alert(n27)
  alert(n16)
  alert(bullTru)
  alert(bullFalse)
//Переприсвоїd кожній змінній з завдання значення на довільне.
hello = "hello world";
owu = "owu-cenobi";
com = "net";
ua = "ea";
one = 101;
ten = 101010;
n999 = 256;
n123 = -3;
pi = 1.23;
n27 = 227;
n16 = 1623;
bullTru = "2";
bullFalse = 0;

//Вивести кожну змінну за допомогою: document.write

document.write(`<div>${hello}</div>`);
document.write(`<div>${owu}</div>`);
document.write(`<div>${com}</div>`);
document.write(`<div>${ua}</div>`);
document.write(`<div>${one}</div>`);
document.write(`<div>${ten}</div>`);
document.write(`<div>${n999}</div>`);
document.write(`<div>${n123}</div>`);
document.write(`<div>${pi}</div>`);
document.write(`<div>${n27}</div>`);
document.write(`<div>${n16}</div>`);
document.write(`<div>${bullTru}</div>`);
document.write(`<div>${bullFalse}</div>`);


//     Вивести кожну змінну за допомогою: console.log
console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(n999);
console.log(n123);
console.log(pi);
console.log(n27);
console.log(n16);
console.log(bullTru);
console.log(bullFalse);


// Вивести кожну змінну за допомогою:  alert,
alert(hello);
alert(owu);
alert(com);
alert(ua);
alert(one);
alert(ten);
alert(n999);
alert(n123);
alert(pi);
alert(n27);
alert(n16);
alert(bullTru);
alert(bullFalse);

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName1 = "Andriy";
let middleName1 = " Boiko ";
let lastName1 = "Volodymyrovych";

//З'єднаd їх в одну змінну person. (Не об'єкт)
let person = firstName1 + middleName1 + lastName1;
console.log(person);


// Pа допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
let firstName = prompt('Як тебе звати');
let lastName = prompt('Як ти по-батькові');
let age = prompt('Скільки тобі років?');
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
alert(`Вітаю ${firstName}  ${lastName}  Тобі  ${age}`);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
    // В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6); // true
console.log(5 > 6); //false
console.log(5 >= 6);//false
console.log(5 === 6);//false
console.log(10 === 10);// true
console.log(10 >= 10);// true
console.log(10 > 10);//false
 console.log(10 < 10);//false
console.log(123 === '123');//false
console.log(123 !== '123');// true

//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a1 = 5;
document.write(str + a1 + "<br/>"); //205 просто до числа дописує строку
document.write(str - a1 + "<br/>"); //15 магія розуміє шо не може від числа відняти строку бере собі рообить строку числом і віднімає
document.write(str * "2" + "<br/>"); //40 бачить знак множення в строці бачить число і сам собі множить
document.write(str / 2 + "<br/>"); //10 бачить знак ділення в строці бачить число і сам собі множить