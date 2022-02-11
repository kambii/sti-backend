const cors = require("cors")
const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.use('/healthcheck', require('./routes/healthcheck.routes'));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req ,res)=>{ headers={"http_status:200,":200, "cache-control": "no-cache"} 
body={"status": "available"} 
res.status(200).send(body)
})

app.listen(PORT , ()=>{
    console.log(`STARTED LISTENING ON PORT ${PORT}`)
});


