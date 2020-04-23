const express = require("express");
require('./db/db')
const app = express();
const router = require('./controllers/availability')

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send("Welcome to my app...!!!")
});

app.listen(3000, () => {
    console.log("server is running")
})