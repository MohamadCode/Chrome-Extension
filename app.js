let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()

  console.log( localStorage.getItem("myLeads") )
}
)

function renderLeads() {
  let listItems =  " "  
  
    for (let index = 0; index < myLeads.length; index++) {
    listItems += `
              <li>
                  <a target='_blank' href='${myLeads[index]}'>
                      ${myLeads[index]}
                  </a>
              </li>
          `  }
    ulEl.innerHTML = listItems
    }



