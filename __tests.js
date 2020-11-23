var express = require ("express")
var ourApp = express()

ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(req, res){
res.send(`
<form action = "/answer" method = "POST" > 
<p> What color is the sky on a clear and sunny day?</p>
<input name = "skyColor" autocomplete = "off">
<button> Submit answer </button>
</form>
`)
})

ourApp.post('/answer', function(req, res){
   if (req.body.skyColor == "blue"){
       res.send(`
       <p> Congrats, that is the correct answer</p>
       <a href = "/"> Back to homepage</a>
       `)
   }
   else{
    res.send(`
    <p> Sorry, that is the incorrect answer</p>
    <a href = "/"> Back to homepage</a>
    `)
   }
})

ourApp.get('/answer', function(req, res){
    res.send("You are lost")
})

ourApp.listen(3000)