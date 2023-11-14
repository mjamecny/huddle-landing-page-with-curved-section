const emailInput = document.getElementById("email")
const submitBtn = document.getElementById("submit")
const errorText = document.querySelector(".error")
const successText = document.querySelector(".success")

submitBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const regex = new RegExp(/\S+@\S+\.\S+/)
  const isValid = regex.test(emailInput.value)

  if (!isValid) {
    emailInput.classList.remove("border-very-dark-cyan")
    emailInput.classList.add("border-light-red")
    errorText.classList.remove("hidden")
  } else {
    emailInput.classList.remove("border-light-red")
    errorText.classList.add("hidden")
    emailInput.classList.add("border-[#40c057]")
    successText.classList.remove("hidden")
    emailInput.value = ""
    setTimeout(() => {
      successText.classList.add("hidden")
      emailInput.classList.remove("border-[#40c057]")
      emailInput.classList.add("border-very-dark-cyan")
      emailInput.blur()
    }, 3000)
  }
})
