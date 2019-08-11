// Your code goes here

//add a break HTML element to the page 
//const break = document.createElement('br')
//document.querySelector('services-header')appendChild(break)
const navLinks = document.querySelectorAll(`.nav-link`)

function backgroundGrn() {
    event.target.style.backgroundColor = `green`
    console.log(`the thing happened!`)
}
navLinks[0].addEventListener(`click`, backgroundGrn)
navLinks[1].addEventListener(`dblclick`, backgroundGrn)
navLinks[2].addEventListener(`mouseover`, backgroundGrn)
navLinks[3].addEventListener(`keydown`, backgroundGrn)
    //I had to click the target to make sure it was in focus, then press any key.