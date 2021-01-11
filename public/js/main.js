

const areaName = document.querySelector('#area-search-input')

const weatherForm = document.querySelector('#weatherForm')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let url = 'http://api.weatherstack.com/current?access_key=4798be2d59c858d5424180038d377da7&query=' + 'New York'
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
        })
    })
})