let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", function(){    
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify(myLeads) )
      render(myLeads)
  })
})

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
  localStorage.clear()
  myLeads = []
  render(myLeads)  
})



inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)

  console.log( localStorage.getItem("myLeads") )
}
)



