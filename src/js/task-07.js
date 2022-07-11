const fontSizeControl = document.querySelector("input")
const text = document.querySelector("#text")

fontSizeControl.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`
})
