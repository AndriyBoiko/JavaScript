/*
- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]*/
let a = "rondondon dsd dsds"
// console.log(a.substring(0, 2))
// console.log(a.substring(3, 5))

// console.log(as(a, 2))

function  cutString(str, n) {
    let arr = [];
    while (str !== '') {
        arr.push(str.substring(0, n));
        str = str.substring(n);
    }
    return arr;
}

document.write(cutString(a, 2))

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
