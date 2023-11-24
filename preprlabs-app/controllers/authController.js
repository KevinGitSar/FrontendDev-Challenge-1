require('dotenv').config();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req,res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        return res.status(400).json({ 'message' : 'Username and password are required.' });
    };

    const foundUser = await User.findOne({username:username}).exec();
    if(!foundUser){
        return res.status.sendStatus(401); //Unauthorized
    }

    //Evaluate password
    const match = await bcrypt.compare(password, foundUser.password);

    if(match){
        // Create JWT
        const accessToken = jwt.sign(
            { 'username' : foundUser.username },
            `${process.env.ACCESS_TOKEN_SECRET}`,
            { expiresIn: '30s' }
        );

        const refreshToken = jwt.sign(
            { 'username' : foundUser.username },
            `${process.env.REFRESH_TOKEN_SECTRET}`,
            { expiresIn: '1d' }
        );
        
        //Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        
        ///
        res.cookie('jwt', refreshToken,{ httpOnly: true, maxAge: 24*60*60*1000 });
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };