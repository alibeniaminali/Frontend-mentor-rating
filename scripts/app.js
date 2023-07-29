function init() {
  const form = document.querySelector('#form')
  const submitButton = document.querySelector('#submit-button')
  const inputs = document.getElementsByName('rating')
  const formCard = document.body.firstElementChild
  const responseCard = document.querySelector('.card--response')

  // Functions
  function handleSubmit(event) {
    event.preventDefault()
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        document.getElementById('rate').innerHTML = inputs[i].value
      }
    }
    formCard.remove()
    responseCard.style.display = 'block'
    if (navigator.vibrate) {
      window.navigator.vibrate(40)
    }
  }

  // Events
  form.addEventListener('submit', handleSubmit)
  inputs.forEach((input) => {
    input.addEventListener('click', () => {
      if (input.checked) {
        submitButton.disabled = false
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', init)
