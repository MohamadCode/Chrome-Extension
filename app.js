let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


function renderLeads() {
let listItems =  " "  

  for (let index = 0; index < myLeads.length; index++) {
  listItems += "<li>" + myLeads[index] + "</li>"
  }

  ulEl.innerHTML = listItems
  }


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value = ""
})



