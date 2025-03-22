const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); 

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, 
            subject: `Novo contato de ${name}`,
            text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('E-mail enviado:', info.response);
        res.json({ message: 'E-mail enviado com sucesso!' });

    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ message: 'Erro ao enviar e-mail', error });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
