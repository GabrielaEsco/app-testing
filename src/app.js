console.log ('java script file loaded - src folder')

const chalk = require('chalk')
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//above to be used for weather finder - user input for address/location provided

const app = express()
const port = process.env.Port || 3000
//sets port equal to environment value

//define paths to other files
const publicDirPath = path.join(__dirname, '../public'  )
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up handlebars engine and views location
//to set up "view engine" use exact values above  and module name - "hbs"
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory - Route handlers
app.use(express.static(publicDirPath))

app.get('', (req, res) =>{
	res.render('index', {
		title: 'Main Menu',
		name: '',
		username: 'Gabriela'
	})
})
//app.com/index

app.get('/about', (req, res) =>{
	res.render('about', {
		title: 'About',
		content1:'Data entered by user. Currently static',
		name:''
	})
})
//app.com/about

app.get('/help', (req, res) =>{
	res.render('help', {
		title: 'Help',
		content1:'Data entered by user. Currently static',
		name:''
	})
})
//app.com/help

app.get('/weather', (req, res) =>{

	if(!req.query.address){
		return res.send({
			error: 'No city name provided. Enter a location'
		})
	}

	geocode(req.query.address, (error, {latitude, longitude, location} = {}) =>{
		if (error){
			return res.send({error})
		}
		forecast(latitude, longitude, (error, weatherData) =>{
			if (error){
				return res.send({error})
			}
			res.send({
				forecast: weatherData,
				location,
				address: req.query.address
			})
		})
	})
})
//app.com/weather //above: query string - added to end of url

app.get('/help/*', (req, res)=>{
	res.render('404page',{
		title: '404 - help',
		errorMessage: 'Problems locating file. Try another url'
	})
})
app.get('*', (req, res)=>{
	res.render('404page',{
		title:'404',
		errorMessage: 'Problems locating file. Try another url'
	})
})
//app.com/404-Page - set up for last line of code after other matches not found

app.listen(port, (req, res) => {
	console.log(chalk.bold('Server running from Port 3000.'))
})
//use above when app is running on heroku. Port defined above as const

// app.listen(3000, (req, res) => {
// 	console.log(chalk.bold('Server running from Port 3000.'))
// })
//use above when running from computer























//below: using return instead of else
	// if (!req.query.search) {
		//return res.send({
	// 		error: 'No search name provided'
	// 	})
	// }


//---app.use(express.static(publicDirPath))
//app.use() - basic syntax
//(express.static)- function passed as argument 
//express.static(publicDirPath)- path directory passed as argument in function


//---app.get ('', (req, res) =>{
	//---res.send('<h1>A Monster 4 All Seasons</h1>')
	//res.send('Welcome back!') //quick test
//---})
//app.com - homepage/index.html

//---console.log(__dirname)
//---console.log(path.join(__dirname, '../public'))
//---console.log(__filename)
//3 above for testing directory paths in console
