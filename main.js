let fyloWorks = document.querySelector(".illustration-stay-productive .illustrate a")
let arrowsvgColor = document.querySelector("svg g g").children[1]


fyloWorks.addEventListener("mouseenter",()=>{
    setTimeout(() => {
    arrowsvgColor.setAttribute("fill","hsl(0, 0%, 100%)")
    }, 100);
})
fyloWorks.addEventListener("mouseleave",()=>{
    setTimeout(() => {
        arrowsvgColor.setAttribute("fill","#62E0D9")
    }, 100);
})





let inputVal = document.querySelector("#sign form input")
let formVal = document.querySelector("#sign form")
let sign = document.querySelector("#sign")
let regex = /(\w+|\d+)@\w+.\w+/ig

let el = document.createElement("p")
el.className = "error"
el.textContent = "Please enter a Valid email Address"
formVal.addEventListener("submit",(e)=>{
    e.preventDefault()
        if (!inputVal.value.match(regex)) {


            sign.append(el)
        } else{
            el.remove()
        }
})





