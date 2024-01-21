let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn =document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.


function renderLeads() {
  let listItems =    " "  
  
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



deleteBtn.addEventListener('dblclick', function(){ 
  localStorage.clear()
  myLeads = []
  renderLeads()  
})



inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()

  console.log( localStorage.getItem("myLeads") )
}
)



