const button=document.getElementById("submit-btn")

button.addEventListener("click",function(e){
    e.preventDefault()
})

const inputList=document.querySelectorAll(".form-input")
console.log(inputList[0])
inputList.forEach((input)=>{
    input.addEventListener("input",(e)=>{
        e.preventDefault()
        localStorage.setItem(input.name,document.getElementById(`${input.id}`).value)
    })
})


window.addEventListener("load",(e)=>{
    inputList.forEach((input)=>{
        input.value=localStorage.getItem(input.name)
    })
})