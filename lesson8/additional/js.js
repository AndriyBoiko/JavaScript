let arr =[]
function scraper(startElement) {

    let children = startElement.children;


    for (const child of children) {
        for (const childElement of child.classList) {
            arr.push(childElement);
        }
        // if (child.classList.value !== ''){
        //     arr.push(child.classList.value)
        // }
        scraper(child);
    }

}

scraper(document.body);
console.log(arr)

