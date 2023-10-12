const objectA = document.querySelector("#object-A")
const objectB = document.querySelector("#object-B")
const startBtn = document.querySelector("#start")

function hideHtml(){
objectA.setAttribute('class', 'hide')
objectB.removeAttribute('class', 'hide')
}








startBtn.addEventListener('click', hideHtml)
