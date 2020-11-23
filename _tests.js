var http = require("http")

var ourApp = http.createServer(function (req, res){
    if (req.url == "/"){
        res.end ("Hello and welcome to my website")
    }
    if (req.url == "/about"){
        res.end ("Thank you for your interest")
    }
    res.end("We cannot find the page you are looking for")
})
ourApp.listen(3000) 
