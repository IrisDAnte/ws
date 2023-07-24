const {WebSocketServer} = require('ws')

const ws = new WebSocketServer({
	port: 3000
})

ws.on('connection', soc => {
	soc.on('message', msg => {
		soc.send(msg.toString())
	})
})
