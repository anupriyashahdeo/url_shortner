const express = require("express")
const homeRoute = require("./routes/home")
const shortUrl = require("./routes/shortUrl")


const PORT = 1337

const app = express();

//middleware
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))


// routes
app.use("/", homeRoute)


app.use("/urlapi", shortUrl)




app.listen(PORT, () => {
    console.log("server is running")
})