//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumb = (a, b, c) => {
    if (a < b && a < c){
        console.log(a)
    } else if ( b < a && b < c){
        console.log(b)
    }else if (c< a && c < b){
        console.log(c)
    }else {
        console.log('Ви ввели не число')
    }
}
minNumb(12, 23, 11);

let maxNumb = (a, b, c) => {
    let result = (a > b && a > c) ? a : ( b > a && b > c) ? b : (c> a && c > b) ? c : 'Ви ввели не число';
    console.log(result)

}

maxNumb(22, 43, 1)
//- створити функцію яка повертає найбільше число з масиву
let arrNumbers = [22, 33, 12, 43, -1, 65, -22];

let maxNumbArr = (arr) =>{
    let max = arr[0];
    for (const max1 of arr) {
        if (max1 > max){
            max = max1
        }
    }
    return max
}
console.log(maxNumbArr(arrNumbers))
// - створити функцію яка повертає найменьше число з масиву
 let minNumbArr = (arr)=> {
    let min = arr[0];
     for (const minElement of arr) {
         if (minElement < min){
             min = minElement
         }
     }
     return min
 }
console.log(minNumbArr(arrNumbers))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13



let calcArrNumbs = (arr) =>{
    let result = 0;
    for (const arrElement of arr) {
        result += arrElement
    }
    return result
}

console.log(calcArrNumbs(arrNumbers))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let calcNumberlenght = (arr) =>{
    let result = 0;
    for (const arrElement of arr) {
        result += arrElement
    }
    return result / arr.length
}
console.log(calcNumberlenght(arrNumbers))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let calcMinMax = (arr) => {
    let max = arr[0];
    let min = arr[0];
    for (const element of arr) {
        if (element > max){
            max = element;

        }
        if (element < min){
            min = element

        }
    }
     console.log(max);
    return min

}

console.log(calcMinMax(arrNumbers))

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let fnRandomArr = (counter) =>{
    let arr =[];
    for( let i = 0; i < counter; i++){
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}

console.log(fnRandomArr(22))

let fnRandomLimit = (counter, limit) => {
    let arr =[];
    for( let i = 0; i < counter; i++){
        arr.push(Math.floor(Math.random()*limit));
    }
    return arr;
}

console.log(fnRandomLimit(5, 100))


let reverse  = (arr) => {
    let newArr = [];

    for (let i = arr.length-1, ri = 0; i >= 0; i--, ri++){
        newArr[ri] = arr[i]
    }
    return newArr;
}
console.log(reverse(arrNumbers))