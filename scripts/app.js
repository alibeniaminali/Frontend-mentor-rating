function init() {
  const form = document.querySelector('#form')
  const submitButton = document.querySelector('#submit-button')
  const ele = document.getElementsByName('rating')
  const formCard = document.body.firstElementChild
  const responseCard = document.querySelector('.card--response')
  
  // Functions
  function handleSubmit(event) {
    event.preventDefault()
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        document.getElementById('rate').innerHTML = ele[i].value
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
  ele.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.checked) {
        submitButton.disabled = false
        // console.log(e.target.value)
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', init)
