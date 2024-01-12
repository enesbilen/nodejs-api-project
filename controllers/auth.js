const Auth = require('../models/auth.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await Auth.findOne({ email })

        if (user) {
            return res.status(500).json({
                message: "Email hesabı zaten var!"
            })
        }
        if (password.length < 6) {
            return res.status(500).json({
                message: "Parolanız en az 6 karakter olmalıdır!"
            })
        }
        const passwordHash = await bcrypt.hash(password, 12)

        const newUser = await Auth.create(
            { username, email, password: passwordHash })

        const userToken = jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' });

        res.status(201).json({
            status: "OK",
            newUser,
            userToken
        })


    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(500).json({ message: "Böyle bir kullanıcı yok!" });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(401).json({ message: "Hatalı şifre" });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN);
        res.status(200).json({
            status: "OK",
            user,
            token
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        //kullanıcıyı eposta adresine göre  bulun
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Kullanıcı Bulunamadı.' })
        }

        //Şifre sıfırlama tokenı oluştur.
        const resetToken = jwt.sign({ email: user.email }, process.env.SECRET_TOKEN, { expiresIn: '1h' });

        //E-posta gönderme
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'c.enesbilen@gmail.com',
                pass: 'Karakartal1903??'
            },
        });

        const mailOptions = {
            from: 'c.enesbilen@gmail.com',
            to: user.email,
            subject: 'Şifre Sıfırlama Talebi',
            text: `Şifre sıfırlama talebinizi tamamlamak için bu linke tıklayın: http://localhost:5000/forgot-password/${resetToken}`,
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).json({ success: false, message: 'E-posta gönderme hatası' });
            } else {
                console.log('Eposta Gönderildi! : ' + info.response);
                res.status(200).json({ success: true, message: 'Şifre sıfırlama e-postası gönderildi' });
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Bir hata oluştu' });
    }
}

module.exports = { register, login, forgotPassword }