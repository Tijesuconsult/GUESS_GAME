let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
// let reset = document.getElementById('reset')
let output = document.getElementById('output')
let correct = document.getElementById('correct')
let pick = document.getElementById('pick')

let answer = Math.floor(Math.random()*100) + 1


btn.addEventListener('click', function (){
if(inp.value == "" || inp.value == null){
    output.innerText = "Number is required"
    output.style.color = "red"
    }
// else if(NaN(inp.value)){
//     output.innerText = "What you input is not a number"
// }
else if(inp.value < 1 || inp.value > 100){
    output.innerText = "Please enter a number between 1 to 100"
    output.style.color = "blue"
}
else if(inp.value == answer){
    output.innerText = `Wow! you guess right: ${answer}`
    pick.innerText = `Yes Number ${inp.value} is correct `
    pick.style.color = "green"
    output.style.color = "green"
    inp.style.backgroundColor = "green"
    inp.style.color = "white"
    btn.style.opacity = 0.2
}
// else if(inp.value !== ""){
//     inp.value = pick.innerText
// }
else{
    output.innerText = "Wrong"
    output.style.color = "red"
    correct.innerText = `Correct Number is: ${answer}`
    pick.innerText = `Your guess number is: ${inp.value}`
    pick.style.color = "red"
    inp.style.backgroundColor = "red"
    inp.style.color = "white"
}
// console.log(answer);
})



