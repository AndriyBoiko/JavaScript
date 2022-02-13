/*
- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'
*/
let helloWorld = 'hello world'
let lorem = 'lorem ipsum'
let js = 'javascript is cool'
console.log(helloWorld.length, lorem.length, js.length)
//- Перевести до великого регістру наступні стрінгові значwення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(helloWorld.toUpperCase() +" //"+ lorem.toUpperCase() +" //"+ js.toUpperCase())
//- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(helloWorld.toUpperCase().toLowerCase() +" //"+ lorem.toUpperCase().toLowerCase() +" //"+ js.toUpperCase().toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.replaceAll(' ', ''))



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

    let str1 = 'Каждый охотник желает знать';
    let stringToarray = (str) => {
        let arr = str.split(' ')
        // console.log(arr)
        document.write(arr)
    }

stringToarray(str1)
//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//      str = 'Каждый охотник желает знать';

    // document.writeln(delete_characters(str, 7)); // Каждый*!/
    let str2 = 'Каждый охотник желает знать'
    let delete_characters = (str, length) => {
        let newstr = str.substr(0, length)
        document.writeln(`<p>${newstr}</p>`)
    }
    delete_characters(str2, 7)

/*- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
При цьому всі символи рядка необхідно перевести у верхній регістр.*/
    str = "HTML JavaScript PHP";

    let str3 = "HTML JavaScript PHP";
    let insert_dash = (str) => {
        let newstr = str.replaceAll(" ", '-').toUpperCase()
        document.writeln(newstr)
    }

    insert_dash(str3)

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

document.write('<hr>')
let str4 = 'lorem ipsum dolor sit amet, consectetur adipisicing elit.'
let firstKeyUp = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
document.write(firstKeyUp(str4))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//  Version 1.0
document.write('<hr>')
let capitalize=(str) =>{
    let newstr = str.split(' ')
    for (const newstrElement of newstr) {
        document.write(newstrElement.charAt(0).toUpperCase() + newstrElement.slice(1) + " ")
    }
}
capitalize(str4)
document.write('<hr>')

// version 2.0
let capitalize20 = (str) => {
    let newstr = str.split(' ')
    return newstr.map(elem => elem.charAt(0).toUpperCase()+elem.slice(1)).join(' ');
}
document.write(capitalize20(str4))

