

const areaName = document.querySelector('#area-search-input')

const weatherForm = document.querySelector('#weatherForm')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let url = 'http://api.weatherstack.com/current?access_key=4798be2d59c858d5424180038d377da7&query=' + 'dallas'
    fetch(url).then((response)=>{
        console.log(response)
        response.json().then((data)=>{
            console.log(data)
        })
    })
})