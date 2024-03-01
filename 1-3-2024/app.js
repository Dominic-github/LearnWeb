let containerFormCreate = document.querySelector('.container-form-create')
let containerFormLogin = document.querySelector('.container-form-login')

let btnOpenCreate = document.querySelector('.open-create')
let btnOpenLogin = document.querySelector('.open-login')

let btnLogin = document.querySelector('.btn-login')
let btnCreate = document.querySelector('.btn-create')

let inputUsername = document.querySelector('.form-username')
let inputPasword = document.querySelector('.form-password')

btnOpenCreate.addEventListener('click', () => {
  containerFormCreate.classList.remove('hiden')
  containerFormLogin.classList.add('hiden')
})

btnOpenLogin.addEventListener('click', () => {
  containerFormCreate.classList.add('hiden')
  containerFormLogin.classList.remove('hiden')
})

btnLogin.addEventListener('click', () => {
  window.location.href = 'http://localhost:5500/quesstion.html'
})

btnCreate.addEventListener('click', () => {})
