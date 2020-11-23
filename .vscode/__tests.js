let express = require ("express")
let ourApp = express()

ourApp.get('/', function(req, res){
res.end(`
<form> 
<p> What color is the sky on a clear and sunny day?</p>
</form>
`)
})
ourApp.listen(3000)