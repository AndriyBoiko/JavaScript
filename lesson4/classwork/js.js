// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumb(a, b, c){
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
minNumb(12, -33, 21)

function maxNumb(a, b, c){
    let result = (a > b && a > c) ? a : ( b > a && b > c) ? b : (c> a && c > b) ? c : 'Ви ввели не число'
    console.log(result)
}
maxNumb(11, -222, -123)


// - створити функцію яка повертає найбільше число з масиву
let arrNumb = [22, 13, 2, 6, 231];
function maxArrNumb(arr){
    let max = arr[0];
    for (const max1 of arr) {
        if( max1 > max){
            max = max1;
        }
    }
    return (max);
}
document.write(maxArrNumb(arrNumb))

//- створити функцію яка повертає найменьше число з масиву
function minArrNumb (arr){
    let min = arr[0]
    for (const minElement of arr) {
        if (minElement < min ){
            min = minElement
        }
    }
    return min;
}

document.write('<p></p>')
document.write(minArrNumb(arrNumb))

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function summArr (array){
    let result =0;
    for (const numbElement of array) {
            result  += numbElement;
    }
    return result
}
document.write('<p></p>')
document.write(summArr(arrNumb))
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageNumbArray (array){
    // let result =0;
    // for (const numbElement of array) {
    //     result  += numbElement ;
    // }
    //
    // return result / array.length
     return summArr(array) / array.length
}

document.write('<p></p>')
document.write(averageNumbArray(arrNumb))

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function massArray (...numbs){
    // let max = numbs[0]
    //
    // for (const maxElem of numbs) {
    //     if (maxElem > max){
    //         max = maxElem
    //     }
    // }
    // console.log(max)
    document.write(maxArrNumb(numbs))
    return minArrNumb(numbs)
}

document.write('<p></p>')
massArray(1, 2, 3,4 ,12)
console.log(massArray(1, 2,3, 10, 11))

//- створити функцію яка заповнює масив рандомними числами

function createArr (counter){
    let arr =[];
    for( let i = 0; i < counter; i++){
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}
document.write('<p></p>')
document.write(createArr(10))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function createLimArr (counter, limit){
    let arr =[];
    for( let i = 0; i < counter; i++){
        arr.push(Math.floor(Math.random()*limit));
    }
    return arr;
}
document.write('<p></p>')
document.write(createLimArr(10, 200))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reversArr(arr){
    let newArr = [];

    for (let i = arr.length-1, ri = 0; i >= 0; i--, ri++){
        newArr[ri] = arr[i]
    }
    return newArr;
}
document.write('<p></p>')
document.write(reversArr(arrNumb))
document.write('<p></p>')


