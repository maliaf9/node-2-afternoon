

let id = 0;

let messages = [];


module.exports = {

    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({id, text, time});
        id++;

        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        const { text } = req.body;
        const updateId = req.params.id;
        const messageIndex = findIndex(messages => messages.id == updateId);
        let messages = messages[messageIndex];

        messages[index] = [{
            id: messages.id,
            text: text || messages.text,
            time: messages.time
        }];

        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const deleteID = req.params.id;    
            messageIndex = messages.findIndex(message => message.id == deleteID);
            messages.splice(messageIndex, 1);

            res.status(200).send(messages);
    }
}