import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase,
  ref, 
  push,
  onValue,
  remove } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js"




const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-10733-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceinDB = ref(database, "Leads")



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


onValue(referenceinDB,function(snapshot) {
    // Challenge: Only run the code below if a snapshot exists
    const snapshotDoesexist = snapshot.exists()
  if (snapshotDoesexist) {
    const snapshotValues = snapshot.val()  
    const leads = Object.values(snapshotValues)
    render(leads) 
  }
   
})


deleteBtn.addEventListener('dblclick', function(){ 
    remove(referenceinDB)
    ulEl.innerHTML = " "

      // Challenge: Import the 'remove' function and call it here to delete the leads

})



inputBtn.addEventListener("click", function () {
  push(referenceinDB,inputEl.value)
  inputEl.value = ""

}
)



