let http = require("http")

let ourApp = http.createServer(function (req, res){
    res.end("Hello, welcome to my website")
})
ourApp.listen(3000)