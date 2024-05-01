require('dotenv').config()
const { log } = require('console')
const express = require('express')
const app = express()

app.get('/api/jokes',(req ,res) => {
    const jokes = [{
        "id":1,
        "title":'Joke1',
        "content":'Joke1hahaha'
    },
    {
        "no":2,
        "title":'Joke2',
        "content":'Joke2hahaha'
    },
    {
        "no":3,
        "title":'Joke3',
        "content":'Joke3hahaha'
    },
]
    res.send (jokes);
})
const port = process.env.PORT || 3000

app.listen( port , ()=>{
    console.log(`${port}`);
})