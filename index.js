
let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr=count+" - "
    saveEL.textContent += countStr
    countEl.textContent=0
    count=0
}

function reset(){
    count = 0
    countEl.textContent = count
}