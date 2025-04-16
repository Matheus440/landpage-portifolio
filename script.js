
const myObserver = new IntersectionObserver((entreies) =>{
    entreies.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("play")
        }
        else{
            entry.target.classList.remove("play")
        }
    })
})

const elements = document.querySelectorAll(".last-one") //querySelector só procura uma classe, querySelectorAll procura todas as classes//

elements.forEach((element) => myObserver.observe(element)
)

const hamburger = document.querySelector(".hamburger")

const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () =>
nav.classList.toggle("active"))
