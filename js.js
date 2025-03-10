const colors = ['red', 'green', '#f15025']
const color = document.querySelector('.color')
const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    const randomnumber = getrandomnumber()
    document.body.style.background = colors[randomnumber]
    color.textContent = colors[randomnumber]
})
function getrandomnumber() {
    return Math.floor(Math.random() * colors.length)
}
//set initial count////////
let count = 0
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')
btns.forEach(function (event) {
    event.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0
        }
        if (count > 0) {
            value.style.color = 'green'
        } if (count < 0) {
            value.style.color = 'red'
        } if (count === 0) {
            value.style.color = '#222'
        }
        value.textContent = count
    })
})
// reviews
const people = [
    {
        id: 1,
        name: "Alice Johnson",
        jobTitle: "Software Developer",
        company: "Tech Innovators Inc.",
        experienceYears: 5
    },
    {
        id: 2,
        name: "Bob Smith",
        jobTitle: "Graphic Designer",
        company: "Creative Solutions",
        experienceYears: 3
    },
    {
        id: 3,
        name: "Charlie Brown",
        jobTitle: "Product Manager",
        company: "Global Enterprises",
        experienceYears: 8
    },
    {
        id: 4,
        name: "Diana Miller",
        jobTitle: "Data Analyst",
        company: "Data Insights Ltd.",
        experienceYears: 4
    }
];
const name = document.getElementById('name')
// const jobTitle = document.querySelect('.jobTitle')
// const company = document.querySelect('.company')

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const random = document.getElementById('random')


let currentItem = 0
window.addEventListener('DOMContentLoaded', function () {

})
function showName() {
    const item = people[currentItem]
    name.textContent = item.name
}
random.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * people.length)
    showName()
})
next.addEventListener('click', function () {
    currentItem++
    if (currentItem > people.length - 1) {
        currentItem = 0
    }
    showName()
})
prev.addEventListener('click', function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = people.length - 1
    }
    showName()
})