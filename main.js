const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const setErrorForm = (input, message) => {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')
  small.innerText = message
  formControl.className = 'form-control error'
}

const setSuccessForm = (input) => {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

const isEmail = (email) => {
  const myRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return myRegex.test(email)
}

const checkInputs = () => {
  // We get all the values of the form
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()

  // Check if the username is valid
  if (usernameValue === '') {
    setErrorForm(username, 'Username cannot be blank')
  } else {
    setSuccessForm(username)
  }

  // Check ofr the username if it is valid
  if (emailValue === '') {
    setErrorForm(email, 'Email cannot be blank')
  } else if (!isEmail(emailValue)) {
    setErrorForm(email, 'Email is not valid')
  } else {
    setSuccessForm(email)
  }

  // Check for the password
  if (passwordValue === '') {
    setErrorForm(password, 'Password cannot be blank')
  } else {
    setSuccessForm(password)
  }

  // Check for the password2
  if (password2Value === '') {
    setErrorForm(password2, 'Password2 cannot be blank')
  } else if (passwordValue !== password2Value) {
    setErrorForm(password, 'Password does not match')
    setErrorForm(password2, 'Password does not match')
  } else {
    setSuccessForm(password2)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkInputs()
})
