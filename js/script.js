document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault()

  // Collect form data
  const username = document.getElementById('username').value.trim()
  const email = document.getElementById('email').value.trim()
  const password = document.getElementById('password').value

  const messageDiv = document.getElementById('message')
  messageDiv.style.color = '#c0392b'

  // Simple validation
  if (!username || !email || !password) {
    messageDiv.textContent = 'All fields are required!'
    return
  }

  // Email format check
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/
  if (!emailPattern.test(email)) {
    messageDiv.textContent = 'Please enter a valid email address.'
    return
  }

  if (password.length < 6) {
    messageDiv.textContent = 'Password must be at least 6 characters.'
    return
  }

  // Simulate successful registration
  messageDiv.style.color = '#256c3d'
  messageDiv.textContent = 'Registration successful!'

  // Optionally, clear fields or redirect after a delay
  setTimeout(() => {
    window.location.href = 'login.html'
  }, 1500)
})
