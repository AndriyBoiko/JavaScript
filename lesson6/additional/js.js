/*
- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]*/
let a = "rondondon dsd dsds"
function  cutString(str, n) {
    let arr = [];
    while (str !== '') {
        arr.push(str.substring(0, n));
        str = str.substring(n);
    }
    return arr;
}
document.write(cutString(a, 2))
document.write('<hr>')

/*
- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com*/
let emal = 'someemail@gmail.com';
let validFn = (mail) => {
    let mailLow = mail.toLowerCase()
    let sumbols = [mailLow.includes('@'),mailLow.includes('.')]
    let ind = [mailLow.indexOf('@'), mailLow.indexOf('.')]
    if (sumbols){
        if (ind[1]-ind[0]> 2 && ind[0]>3 && ind[1]-ind[0] < 7 ){
            console.log("Красавчик зміг ввести email вірно")
        }else{
            console.log("Невірний Запис")
        }
    }
    else {
        console.log('Невірний email')
    }
}
validFn(emal)


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// console.log(coursesArray[0].modules.length).sort((a,b)=>a.modules-b.modules)
let newCourse = coursesArray.sort((a, b) => a.modules.length - b.modules.length)

for (const newCourseElement of newCourse) {
    console.log(newCourseElement)
    for (const newCourseElementKey in newCourseElement) {
        document.write(`<p>${newCourseElement[newCourseElementKey]}</p>`)
    }
}
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = ;
// document.writeln(count(str, symb)) // 5
let search = 'Астрономия это наука о небесных объектах';

let fnSearchSumb = (str, sumbol) =>{
    let arr =[]
    let neWsearch = str.split('')
    for (const elem of neWsearch) {
        if (elem === sumbol){arr.push(elem)}
    }return arr.length
}
console.log(fnSearchSumb(search, 'о'))
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру
let str = "Сила тяжести приложена к центру масс тела"

let fnSlice = (str, counter) =>{
    let newStr = str.split(' ')
    document.write('<hr>')
    document.write(newStr.slice(0, counter))
}
fnSlice(str, 5)
