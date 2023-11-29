const User = require('../models/Users');
const jwt = require('jsonwebtoken');

// Handles the access token of a user.
const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt){ return res.sendStatus(401)};

    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();

    // User does not exists
    if(!foundUser) { return res.sendStatus(403);}; //Forbidden

    // Evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (error, decoded) => {
            if(error || foundUser.username !== decoded.username) {return res.sendStatus(403);};
            const roles = Object.values(foundUser.userType);
            
            const accessToken = jwt.sign(
                {
                    'UserInfo': {
                        'username': decoded.username,
                        'roles': roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '30s'
                }
            );
            res.json({accessToken});
        }
    );
}

module.exports = { handleRefreshToken };