require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT ?? 3001;


app.listen(PORT, console.log(`Server is listening on port ${PORT}`))

app.get("/api/exchangerate", (req, res) => {
    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=EUR%2CCAD%2CINR%2CGBP%2CJPY&base=USD", {
        method: 'GET',
        redirect: 'follow',
        headers: { "apikey": "EdC7hWQl4Qy6FAw0cYOPgUfMCYGPcd1D" }
    }).then(response => response.json()).then(result => res.send(result)).catch(error => console.log(`Error ${error}`))
})
