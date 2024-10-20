const express = require("express")

const router = express.Router()

const path = require("path")//path node m definw h

router.get("/", async (req, res) => {
    console.log("dir name", __dirname)
    const servehtml = path.join(__dirname, "public", "index.html")
    res.sendFile(servehtml)
})
module.exports = router