const express = require("express")
const app = express()
const Messages_Controller = require("./controllers/messages_controller")

app.use(express.json())
app.use(express.static(__dirname + "/../public/build"))

const port = 5000
const messagesBaseUrl = "/api/messages"
app.post(messagesBaseUrl, Messages_Controller.create)
app.get(messagesBaseUrl, Messages_Controller.read)
app.put("/api/messages/:id", Messages_Controller.update)
app.delete("/api/messages/:id", Messages_Controller.delete)


app.listen(port, () => {
    console.log("listening on port", port)
})