$(document).ready(function () {
    $('.side-bar-list').on('click', function () {
        $(this).children().toggle()
    })
})

const form = document.querySelector('.formSendFeedback')
const sendBtn = document.querySelectorAll('.btn_send')
const data = form.querySelectorAll('.form-control')

const checkFieldsPresence = function () {
    for (let i = 0; i < data.length; i++) {
        data[i].addEventListener('input', function () {
            if (data[i].value) {
                data[i].classList.remove('error-value')
            }
        })
        if (!data[i].value) {
            console.log('field is blank', data[i])
            data[i].setAttribute('placeholder', 'Поле обовʼязкове до заповнення')
            data[i].classList.add('error-value')
        } else {
            console.log(data[i].value)
            data[i].classList.remove('error-value')
        }
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // removeValidation()
    checkFieldsPresence()
    // document.querySelector('.modal').style.display = 'none'
})