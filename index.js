const app = require('express')();
const protobuf = require('protobufjs');

async function run() {
    const root = await protobuf.load('donkeys.proto')
    const Donkey = root.lookupType('Donkey')
    const Donkeys = root.lookupType('Donkeys')

    const fabio = Donkey.fromObject({
        id: "1",
        name: "Fabio",
        surname: "Angelilli",
        age: 27,
        bald: true
    })

    const rick = Donkey.fromObject({
        id: "2",
        name: "Riccardo",
        surname: "Rossi",
        age: 27,
        bald: false
    })

    const antonio = Donkey.fromObject({
        id: "3",
        name: "Antonio",
        surname: "Epifani",
        age: 23,
        bald: false
    })

    const donkeysMsg = Donkeys.fromObject({
        donkeys: [fabio, rick, antonio]
    })

    app.get('/donkeys', (req, res) => {
        res.status(200).send(Donkeys.encode(donkeysMsg).finish())
    })
    
    app.listen(8080)

    app.catch
}

run()