const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3600
const CODECHEF_URL = 'https://www.codechef.com/api/list/contests/all'
const LEETCODE_URL = 'https://leetcode.com/graphql?query={%20allContests%20{%20title%20titleSlug%20startTime%20duration%20__typename%20}%20}'

app.use(cors())

app.use('/codechef', (req, res)=>{
    axios.get(CODECHEF_URL)
    .then(response=>{
        console.log(response.data);
        res.send(response.data)
    })
    .catch(err=>{
        console.log(err);
    })
})

app.use('/leetcode', (req, res)=>{
    axios.get(LEETCODE_URL)
    .then(response=>{
        console.log(response.data);
        res.send(response.data)
    })
    .catch(err=>{
        console.log(err);
    })
})

app.listen(PORT, () => console.log(`Server running: ${PORT}`))