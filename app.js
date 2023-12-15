let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  console.log(myLeads)
  inputEl.value = ""
})

for (let index = 0; index < myLeads.length; index++) {
    ulEl.innerHTML += "<li>" + myLeads[index] + "</li>"
}