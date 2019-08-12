// Your code goes here

//add a break HTML element to the page 
//const break = document.createElement('br')
//document.querySelector('services-header')appendChild(break)
const navLinks = document.querySelectorAll(`.nav-link`)

function backgroundGrn() {
    event.target.style.backgroundColor = `green`
    console.log(`the thing happened at NAV!`)
}
navLinks[0].addEventListener(`click`, backgroundGrn)
navLinks[1].addEventListener(`dblclick`, backgroundGrn)
navLinks[2].addEventListener(`mouseover`, backgroundGrn)
navLinks[3].addEventListener(`keydown`, backgroundGrn)
    //I had to click the target to make sure it was in focus, then press any key.
    //for the keydown event to work. Not sure if that was the intent.

const paragraphEvents = document.querySelectorAll(`.destination p`)

function backgroundBlue() {
    event.target.style.backgroundColor = "blue"
    event.target.style.color = "white"
    console.log('the thing happened at the bottom paragraphs!')

}
paragraphEvents[0].addEventListener(`mousemove`, backgroundBlue)
paragraphEvents[1].addEventListener(`wheel`, backgroundBlue)
paragraphEvents[2].addEventListener(`auxclick`, backgroundBlue)

//contextmenu