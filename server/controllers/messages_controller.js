let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        let {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.send(messages)
    },
    read: (req, res) => {
        res.send(messages)
    },
    update: (req, res) => {
        let {text} = req.body
        let updateId = req.params.id
        let messageIndex = messages.findIndex(message => message.id == updateId)

        messages[messageIndex] = {
            id: messageIndex,
            text: text || message.text,
            time: message.time
        }
        res.send(messages)
    },
    delete: (req, res) => {
        let deleteId = req.params.id
        messageIndex = messages.findIndex(message => message.id == deleteId)
        messages.splice(messageIndex, 1)
        res.send(messages)
    }
}
