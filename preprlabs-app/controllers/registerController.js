const User = require('../models/Users');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const {firstName, lastName, email, username, password, userType, language} = req.body;
    if(!username || !password){
        return res.status(400).json({ 'message': 'username and password are requested'});
    }

    const duplicate = await User.findOne({username:username}).exec();

    if(duplicate){
        return res.sendStatus(409); //There's conflict
    } 
    
    try{
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);
        //create and store new user
        const result = await User.create({
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'username': username,
            'password': hashedPwd,
            'userType': userType,
            'language': language,
        });

        res.status(201).json({'success':`New User ${username} created!`});
    } catch(error){
        res.status(500).json({'message':error.message});
    }
};

module.exports = { handleNewUser };