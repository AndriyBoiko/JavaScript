// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let f1 = document.forms.f1



f1.onsubmit = function (e) {
    e.preventDefault()

   let inputName = e.target.txt.value
   let inputAge= e.target.age.value
    let arr = {inputName, inputAge}
    localStorage.setItem(inputName, JSON.stringify(arr))
}

// -створити форму з інпутами для model,type та volume автівки.
//    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let carsArray = JSON.parse(localStorage.getItem('cars'))|| []
let f2 = document.forms.f2
f2.onsubmit = function (e){
    e.preventDefault()
    let inputModel = e.target.model.value
    let inputType = e.target.mtype.value
    let inputVolume = e.target.volume.value

    let cars = {inputModel, inputType, inputVolume}

    carsArray.push(cars)
    localStorage.setItem('cars', JSON.stringify(carsArray));
}