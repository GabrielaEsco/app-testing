console.log ('client side java script file loaded - public folder')

const weatherForm = document.querySelector('form')
//document.querySelector('form')
const searchElement = document.querySelector('input')

const line1Msg = document.querySelector('#msgOne')
const line2Msg = document.querySelector('#msgTwo')

const dropmenuHeader = document.querySelector('header')
const dropmenu = document.querySelector('#mainMenu')

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault()
	//to prevent "on submit" from automatically refreshing page (data disappears back end)

	const address = searchElement.value
	//data submitted by user to be sued to generate a response

	line1Msg.textContent = 'Loading...'
	line2Msg.textContent = ''
	//to clear values from previous search - ""

	fetch('http://localhost:3000/weather?address='+ address).then((response) => {
		response.json().then((dataFound) => {
			if (dataFound.error){
				
				line1Msg.textContent = dataFound.error

			} else {

				line1Msg.textContent = 'Weather results for ' + dataFound.location + ' :'
				line2Msg.textContent = dataFound.forecast

			}
		})
	})
})

dropmenuHeader.addEventListener('click', (e) => {

	dropmenu.style.backgroundColor = "#fff";

	dropmenu.innerHTML = '<ul><li><a href="#"><button>Button One</button></a></li> <li><a href="#"><button>Button Two</button></a></li> <li><a href="/about"><button>About</button></a></li> <li><a href="/help"><button>Help</button></a></li> <li><a href=""><button>Close Menu</button></a></li></ul>'

//////add here: if closebutton pressed is true then reload page

})




























//default refreshes page and data disappears once submitted (button pressed)
//add a function - event

	// fetch('http://localhost:3000/weather?address='+ address).then((response) => {
	// 	response.json().then((dataFound) => {
	// 		if (dataFound.error){
	// 			//console.log(dataFound.error)

				// line1Msg.textContent = dataFound.location
				// line2Msg.textContent = dataFound.forecast
				// //console.log(dataFound.location)
				// //console.log(dataFound.forecast)
				// //console.log(dataFound)

























//---fetch('http://puzzle.mead.io/puzzle').then((response) => {
//--- response.json().then((data) => {
//---  console.log(data)
//---  })
//---})
//pass string as 1st argument http we are trying extract data from
//2nd argument "then" method as return value, provide callback function to run "data" - parsed json
//fetch - browser based API, client side using forms
