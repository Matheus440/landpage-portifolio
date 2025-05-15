
const myObserver = new IntersectionObserver((entreies) => {
    entreies.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("play")
        }
        else {
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


//configuração entre em contato//

function enviarWhats(event) {
    event.preventDefault()

    const nome = document.querySelector("#nome").value
    const mensagem = document.querySelector("#mensagem").value
    const tel = '21995771269'

    const textWhats = `Olá, meu nome é ${nome}, ${mensagem}`
    const msgmFortmated = encodeURIComponent(textWhats)
    const url = `https://wa.me/${tel}?text=${msgmFortmated}`

    window.open(url, '_blank')
}




//configuração entre em contato //