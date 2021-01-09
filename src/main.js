const express = require('express')
const hbs = require('hbs')
const path = require('path')
const getWeather = require('./weather.js')
let app = express()
let publicDirectoryPath = path.join(__dirname + '/../public')
app.use(express.static(publicDirectoryPath))
let partialsPath = path.join(__dirname + '/../templates/partials')
hbs.registerPartials(path.join(partialsPath))
let viewsPath = path.join(__dirname + '/../templates/views')

app.set('view engine', 'hbs')
app.set('views',viewsPath)


app.get('',(req,res)=>{
    res.render('index')
    
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/help',(req,res)=>{
    res.render('help')
})

app.get('/weather',(req,res)=>{
    getWeather(req.query.areaName,(error,response)=>{
        if(error){
            res.send('No Data Found')
        }else{
            res.send(response.body)
        }
    })
})

app.get('*',(req,res)=>{
    res.send('404 :(')
})
app.listen('3000')