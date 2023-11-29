require('dotenv').config();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Function to handle the user's login.
const handleLogin = async (req,res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        return res.status(400).json({ 'message' : 'Username and password are required.' });
    };

    // Check whether username or email already exists (users can log in with email too).
    const foundUser = await User.findOne({username:username}).exec();
    const foundEmail = await User.findOne({email:username}).exec();

    if(foundUser){
        // Evaluate password
        const usernameMatch = await bcrypt.compare(password, foundUser.password);
        if(usernameMatch){
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
            
            // Saving refreshToken with current user
            foundUser.refreshToken = refreshToken;
            const result = await foundUser.save();
            
            
            res.cookie('jwt', refreshToken,{ httpOnly: true, maxAge: 24*60*60*1000 });
            res.json({ accessToken, foundUser });
        } else {
            res.sendStatus(401);
        }
    } else if(foundEmail){
        // Evaluate password with email
        const emailMatch = await bcrypt.compare(password, foundEmail.password);

        if(emailMatch){
            // Create JWT
            const accessToken = jwt.sign(
                { 'username' : foundEmail.username },
                `${process.env.ACCESS_TOKEN_SECRET}`,
                { expiresIn: '30s' }
            );

            const refreshToken = jwt.sign(
                { 'username' : foundEmail.username },
                `${process.env.REFRESH_TOKEN_SECTRET}`,
                { expiresIn: '1d' }
            );
            
            // Saving refreshToken with current user
            foundEmail.refreshToken = refreshToken;
            const result = await foundEmail.save();
            
            res.cookie('jwt', refreshToken,{ httpOnly: true, maxAge: 24*60*60*1000 });
            res.json({ accessToken, foundEmail });
        } else {
            res.sendStatus(401);
        }
    } else {
        return res.status.sendStatus(401); //Unauthorized
    }



    
}

module.exports = { handleLogin };