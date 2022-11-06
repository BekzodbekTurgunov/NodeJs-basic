const express = require('express');
const router = express.Router()
const users = []

router.get('/all', (req, res) => {
    res.send(users)
})
router.post('/', (req, res) => {
    const {password,firstName, lastName, email}  = req.body
    if(!email || !password){
        return res.status(400).json({message: "Email yoki parol unitilgan."})
    }
    // if(!isValidEmail){
    //     return res.status(400).json({message: "Email notogri kiritilgan."})
    // }
    const checkEmail = users.some(user => {return user.email == email})
    if(checkEmail){
        return res.status(409).json({message: "Email allaqachon royxatdan o'tgan"})
    }

    const user = {
        id: users.length + 1,
        firstName: req.body.firstName,
        lastName,
        password,
        email
    }
    users.push(user)
    res.status(201).json({message: "User muffaqqiyatli yaratildi!", data: user})
})
router.put('/', (req, res) => { 
})

router.post('/login', (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({message: "Email yoki parol unitilgan."})
    }
    const userIndex = users.findIndex(user => {return user.email == email})
    if(userIndex< 0){
        return res.status(404).json({message: "Foydalanuvchi topilmadi!"})
    }
    const user = users[userIndex]
    if(user.password != password ){
        return  res.status(400).json({message: "Email yoki parol xato!"})
    }

    res.status(200).json({data: user})

})


// function isValidEmail(email) {
//     // check email valid or not
//     return true 
// }
module.exports = router
