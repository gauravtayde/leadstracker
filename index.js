

let myLeads=[]
let lastLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("output-el")
const resetBtn=document.getElementById("new-btn")
const pastBtn=document.getElementById("past-btn")
const tabBtn=document.getElementById("tab-btn")

const leadfromLS=JSON.parse( localStorage.getItem("myLeads"))

if(leadfromLS)
{
myLeads=leadfromLS
render(myLeads)
}

//const tabs=[{url: "https://www.linkedin.com/in/gauravtayde/"}]

tabBtn.addEventListener("click", function() {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	myLeads.push(tabs[0].url)
	localStorage.setItem("myLeads",JSON.stringify(myLeads))
	render(myLeads)
	})
})

function render(Leads) {
		let listItems=""
	for(let i=0; i< Leads.length; i++)
{
	listItems+=`<li>
							<a href='${Leads[i]}' target='_blank'>
								${Leads[i]}
							</a>
						</li>`
}
ulEl.innerHTML=listItems
}


inputBtn.addEventListener("click", function() {
	if(inputEl)
	{
	myLeads.push(inputEl.value)
	console.log(myLeads)
	inputEl.value=""
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)
	}
})



resetBtn.addEventListener("click", function() {
	localStorage.clear()
	ulEl.innerText=""
	lastLeads=myLeads
	myLeads=[]
	render(myLeads)
})

pastBtn.addEventListener("click", function() {
	render(lastLeads)
})