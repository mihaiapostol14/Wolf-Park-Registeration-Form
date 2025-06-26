class RegisterForm {
  constructor() {
    this.form = document.querySelector('.form')
    this.message = document.querySelector('.form__message')
    this.inputs = document.querySelectorAll('.form__input')
    this.passwordInputs = document.querySelectorAll('.password')
    this.toggles = document.querySelectorAll('.form__toggle')

    this.init()
  }

  init() {
    this.handleSubmit()
    this.showHidePassword()
  }

  // ✅ HANDLE FORM SUBMIT
  handleSubmit() {
    this.form.addEventListener('submit', e => {
      e.preventDefault()

      const username = this.inputs[0].value.trim()
      const email = this.inputs[1].value.trim()
      const password = this.passwordInputs[0].value
      const confirmPassword = this.passwordInputs[1].value

      this.message.style.color = '#ff6b6b'

      // Validation
      if (!username || !email || !password || !confirmPassword) {
        this.message.textContent = 'All fields are required!'
        return
      }

      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/
      if (!emailPattern.test(email)) {
        this.message.textContent = 'Invalid email address.'
        return
      }

      if (password.length < 6) {
        this.message.textContent = 'Password must be at least 6 characters.'
        return
      }

      if (password !== confirmPassword) {
        this.message.textContent = 'Passwords do not match.'
        return
      }

      // Success
      this.message.style.color = '#00ffae'
      this.message.textContent = 'Registration successful!'

      setTimeout(() => {
        window.location.href = 'login.html'
      }, 1500)
    })
  }

  // 👁️ SHOW / HIDE PASSWORD
  showHidePassword() {
    this.toggles.forEach((toggle, index) => {
      toggle.addEventListener('click', () => {
        const input = this.passwordInputs[index]

        if (input.type === 'password') {
          input.type = 'text'
          toggle.classList.replace('fa-eye-slash', 'fa-eye')
        } else {
          input.type = 'password'
          toggle.classList.replace('fa-eye', 'fa-eye-slash')
        }
      })
    })
  }
}

// 🚀 INIT
new RegisterForm()
