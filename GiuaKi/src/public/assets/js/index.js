// Switch form
const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
  container.classList.add('active')
})

loginBtn.addEventListener('click', () => {
  container.classList.remove('active')
})

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

// Login signup
const signupBtn = document.getElementById('signup_btn')
const signinBtn = document.getElementById('signin_btn')

signinBtn.addEventListener('click', () => {
  let signinInputEmail =
    document.getElementsByClassName('signin_email')[0].value
  let signinInputPassword =
    document.getElementsByClassName('signin_password')[0].value
  if (
    validateEmail(signinInputEmail) &&
    signinInputEmail &&
    signinInputPassword
  ) {
    console.log(signinInputEmail)
    console.log(signinInputPassword)
  }
})

signupBtn.addEventListener('click', () => {
  let signupInputName = document.getElementsByClassName('signup_name')[0].value
  let signupInputEmail =
    document.getElementsByClassName('signup_email')[0].value
  let signupInputPassword =
    document.getElementsByClassName('signup_password')[0].value

  if (
    validateEmail(signupInputEmail) &&
    signupInputName &&
    signupInputEmail &&
    signupInputPassword
  ) {
    console.log(signupInputName)
    console.log(signupInputEmail)
    console.log(signupInputPassword)
  }
})
