
// signIn
const showText = document.querySelector('.show')
const showPassword = document.querySelector('.cover')
const inputPassword = document.querySelector('input[type=password]')

// showpassword for login
showText.addEventListener('click', function () {
    if (inputPassword.type == 'password') {
        inputPassword.setAttribute('type', 'text')

    } else {
        inputPassword.setAttribute('type', 'password')
    }
    console.log(inputPassword)
    showText.style.display = 'none'
    showPassword.style.display = 'block'
})

showPassword.addEventListener('click', function () {
    if (inputPassword.type == 'text') {
        inputPassword.setAttribute('type', 'password')
    }
    showText.style.display = 'block'
    showPassword.style.display = 'none'
})

// signUp
const showTexts = document.querySelector('.shows')
const showPasswords = document.querySelector('.covers')
const showInputs = document.querySelector('.inputshow')

// showpassword for signup
showTexts.addEventListener('click', function () {
    if (showInputs.type == 'password') {
        showInputs.setAttribute('type', 'text')

    } else {
        showInputs.setAttribute('type', 'password')
    }
    showTexts.style.display = 'none'
    showPasswords.style.display = 'block'
})

showPasswords.addEventListener('click', function () {
    if (showInputs.type == 'text') {
        showInputs.setAttribute('type', 'password')
    }
    showTexts.style.display = 'block'
    showPasswords.style.display = 'none'
})






// login checkform
function checkform() {
    let canSubmit = true
    let button = document.querySelector('.sign-in .btn');
    let inputs = document.querySelectorAll('.sign-in input')
    inputs.forEach((i) => {
        if (i.value.length > 0) {
            canSubmit = true
        } else {
            canSubmit = false
        }
    })
    if (!canSubmit) {
        button.disabled = true
        button.style.backgroundColor = " transparent";
    } else {
        button.disabled = false
        button.style.backgroundColor = " #4C3A74"
    }

}

// signup checkform
function checkForm() {
    let button = document.querySelector('.sign-up .btn');
    let canSubmit = true
    let inputs = document.querySelectorAll('.sign-up .input')
    inputs.forEach((i) => {
        if (i.value.length > 0) {
            canSubmit = true
        } else {
            canSubmit = false
        }
    })
    console.log()
    if (!canSubmit) {
        button.disabled = true
        button.style.backgroundColor = " transparent";
    } else {
        button.disabled = !canSubmit
        button.style.backgroundColor = " #4C3A74"
    }

}
