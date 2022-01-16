const app = require('express')();
const protobuf = require('protobufjs');

async function run() {
    const root = await protobuf.load('developers.proto')
    const GetDevelopersResponse = root.lookupType('GetDevelopersResponse')
    const Developer = GetDevelopersResponse.lookupType('Developer')

    const fabio = Developer.fromObject({
        id: "1",
        name: "Fabio",
        surname: "Angelilli",
        age: 27,
        platform: "iOS",
        bald: true
    })

    const rick = Developer.fromObject({
        id: "2",
        name: "Riccardo",
        surname: "Rossi",
        platform: "React",
        age: 27,
        bald: false
    })

    const message = GetDevelopersResponse.fromObject({
        developers: [fabio, rick]
    })

    app.get('/developers', (_, res) => {
        const encodedMessage = GetDevelopersResponse.encode(message).finish()

        const payloadMessage = GetDevelopersResponse.decode(encodedMessage)
        const payload = GetDevelopersResponse.toObject(payloadMessage)
        console.log(payload)

        res.status(200).send(encodedMessage)
    })
    
    app.listen(8080)
}

run()