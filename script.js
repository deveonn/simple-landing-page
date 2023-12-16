function showSolutionsOptions() {
  let switchValue = false
  const hidedSolutionsOptions = document.querySelector("#solutions-options")

  if (switchValue === false) {
    hidedSolutionsOptions.style = "visible"
    switchValue = true
    return
  }

  if (switchValue === true) {
    hidedSolutionsOptions.style = "none"
    switchValue = false
    return
  }
}

document.addEventListener("click", () => {
  
})