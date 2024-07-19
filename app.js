import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js"


const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-10733-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)



let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")








function render(leads) {
  let listItems =  " "  
  
    for (let index = 0; index < leads.length; index++) {
    listItems += `
              <li>
                  <a target='_blank' href='${leads[index]}'>
                      ${leads[index]}
                  </a>
              </li>
          `  }
    ulEl.innerHTML = listItems
    }


deleteBtn.addEventListener('dblclick', function(){ 
  myLeads = []
  render(myLeads)  
})



inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  render(myLeads)

  console.log( localStorage.getItem("myLeads") )
}
)



