import * as express from "express"
const app = express()

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.listen(9000, function () {
    console.log('Listening on port 9000');
});