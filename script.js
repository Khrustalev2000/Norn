const alertTest =document.querySelector(".important")
alertTest.addEventListener("click", signal)
function signal(){alert("Aliens!")}

const inputText =document.querySelector("#event")
inputText.addEventListener("change",takeText)
function takeText(event){
    console.log(event)
    const inputValue =event.currentTarget.value
    alertTest.innerHTML = inputValue
}