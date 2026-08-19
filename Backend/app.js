const express = require('express');
const cors = require('cors');
const { messages } = require('../messages');

const app = express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        message:'CRM WhatsApp CNX API funcionando!'
    });
});

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})