// const palette = ['A', 'B', 'C', 'E', 'D', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const palette = ['red', 'oranges', 'green', 'yellow', 'bluse',]
const paletteBtn = document.querySelector('.paletteBtn')
paletteBtn.addEventListener('click', function () {
    // let Pal = '#'
    // for (let i = 0; i < 6; i++) {
    //     Pal += palette[changecolor()]
    // }
    // Pal += palette[1]
    document.body.style.background = palette[changecolor()]
})
function changecolor() {
    return Math.floor(Math.random() * palette.length)
}
// function changecolor() {
//     return Math.floor(Math.random() * palette.length)
// }
// count section
let count = 0
const value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const style = e.currentTarget.classList
        if (style.contains('decrease')) {
            count--
        } else if (style.contains('increase')) {
            count++
        }
        else {
            count = 0
        }
        if (count > 0) {
            value.style.color = 'green'
        }
        if (count < 0) {
            value.style.color = 'red'
        }
        if (count === 0) {
            value.style.color = 'black'
        }
        value.textContent = count
    })
})
// toggle 
const toggle = document.querySelector('.toggle')
const navLinks = document.querySelector('.nav-links')
toggle.addEventListener("click", function () {
    navLinks.classList.toggle('show-links')
})
// 
const mkodalbtn = document.querySelector('.mkodal-btn')
const modaloverlay = document.querySelector('.modal-overlay')
const closebtn = document.querySelector('.close-btn')

mkodalbtn.addEventListener('click', function () {
    modaloverlay.classList.add('modal-show')
    change()

})
closebtn.addEventListener('click', function () {
    modaloverlay.classList.remove('modal-show')
    change()
})
function change() {
    if (modaloverlay.classList.contains('modal-show')) {
        document.body.style.background = 'red'
    } else {
        document.body.style.background = ''
    }
}
// quetions-btn

const quetionsBtn = document.querySelectorAll('.quetions-btn')
const questions = document.querySelectorAll('.questions')
quetionsBtn.forEach(function (question) {
    question.addEventListener('click', function (e) {
        const open = e.currentTarget.parentElement.parentElement
        questions.forEach(function (e) {
            if (e !== open) {
                e.classList.remove('hiden-item')
            }
        })
        open.classList.toggle('hiden-item')
    })
})
// video 

const switchBtn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
switchBtn.addEventListener('click', function () {
    if (!switchBtn.classList.contains('slide')) {
        switchBtn.classList.add('slide')
        video.pause()
    } else {
        switchBtn.classList.remove('slide')
        video.play()
    }
})

