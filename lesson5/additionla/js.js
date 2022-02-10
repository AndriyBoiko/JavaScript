// - Дано натуральное число n. Выведите все числа от 1 до n.
let numbersN = (n) => {
    for (let i=1; i<=n; i++){
        // console.log(i)
    }
}
numbersN(10)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let aToB = (a, b) => {
    if (a < b){
        for (let i = a; i <= b; i++){
           document.write(`${i} `)

        }
    } else if (a  >  b){
        for (let i = a; i  >= b; i--){
            document.write(`${i} `)

        }
    } else {
        console.log('zazaza')
    }
}

aToB(23, 35);



let arrNull = [1, 2, 0 , 3]

