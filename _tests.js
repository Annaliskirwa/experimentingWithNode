var http = require("http")

var ourApp = http.createServer(function (req, res){
    res.end("Hello, welcome to my website")
})
ourApp.listen(3000)