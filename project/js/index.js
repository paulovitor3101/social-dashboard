const cards = document.querySelectorAll('.card')
const mode = document.querySelector('.switch')
const input = mode.querySelector('input')
const main = document.querySelector('main')
const body = document.querySelector('body')

// Adicona a Class Active
function active() {
    cards.forEach((item) => {
        item.classList.remove('active')
    })
    this.classList.add('active')
}

cards.forEach((item) => {
    item.addEventListener('click', active)
})

// Muda O Theme
function theme() {
    main.classList.toggle('light-theme')

    if (main.classList.contains('light-theme')) {
        body.style.background = '#fff'
        body.style.boxShadow = 'inset 0px 400px 0px #f5f7ff'
    } else {
        body.style.boxShadow = 'inset 0px 400px 0px #1f212e'
        body.style.background = '#1e202a'
    }
}
input.addEventListener('click', theme)



function initAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')
    numeros.forEach((numero) => {
        const total = +numero.innerHTML
        const incremento = Math.floor(total / 50)
        let start = 0
        const timer = setInterval(() => {
            start = start + incremento
            numero.innerHTML = start
            if (start > total) {
                numero.innerHTML = total
                clearInterval(timer)
            }
        }, 25 * Math.random())
    })
}
initAnimaNumeros()