const express = require('express')


const router = express.Router()


router.post('/login',(res, req)=>{
    console.log(res,req)
})

module.exports = router