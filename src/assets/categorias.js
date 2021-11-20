let categories = document.querySelector('.categories')

let toTopButton = document.getElementById('to-top')

categories.addEventListener('mouseover', function (e) {
    if ("IMG" == e.srcElement.tagName) {
        e.srcElement.className = "shadow"
    }
})

categories.addEventListener('mouseout', function (e) {
    if ("IMG" == e.srcElement.tagName) {
        e.srcElement.classList.remove("shadow")
    }
})

