const User = require('../models/Users');

const handleLogout = async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt){ return res.sendStatus(204);}; //No Content
    const refreshToken = cookies.jwt;

    // Clear JWT in cookie storage, user will receive a new token upon login.
    const foundUser = await User.findOne({ refreshToken }).exec();
    if(!foundUser){
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
        return res.sendStatus(204);
    }

    //Delete refreshToken in DB
    foundUser.refreshToken = '';
    const result = await foundUser.save();

    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    res.sendStatus(204);

};

module.exports = { handleLogout };