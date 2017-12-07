import * as express from "express";
import rest from "./rest";

const app = express()

rest(app);

app.get('/ping', async (req, res) => await res.send("pong"))

app.listen(9000, () => console.log('Listening on port 9000'));
