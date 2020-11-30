const express = require('express')
const userRouter = require('./routers/userinfo')

const app = express()

// 处理req body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('hello express')
})

app.use('api/user', userRouter)

app.listen(3000)

console.log('服务已启动')
