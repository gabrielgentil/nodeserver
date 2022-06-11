// Arquivo server.js
const http = require('http')
const host = '0.0.0.0'
const port = 3000
const requestListener = function (req, res) {
	console.log('request received')
	res.setHeader('Content-Type', 'text/html')
	res.writeHead(200)
	res.end(
		'<div style="padding-top:25vh ;width: 700px; margin-left: auto; margin-right: auto;"><h1>Nove horas vamos embora !</h1><img src="https://pbs.twimg.com/media/E3yyK-dWYAIsxMn.jpg"> </div>'
	)
}
const server = http.createServer(requestListener)
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`)
})
