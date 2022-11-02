const express = require('express');
const router = express.Router()
const users = [
    {
        id:1,
        familyasi:"Toxtasinov",
        yoshi:13,
    },
    {
        id:2,
        familyasi:"Ergashev",
        yoshi: 17
    }
]


router.get('/', (req, res) => {

    res.send(users)
})

router.get('/contact', (req, res) => {

    res.send({phone:23123, email:"mnimadi@mfdmfcom"})
})
module.exports = router
