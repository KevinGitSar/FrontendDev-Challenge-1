const User = require('../models/Users');
const bcrypt = require('bcrypt');


// Function that handles the creation of a new user.
const handleNewUser = async (req, res) => {
    const {firstName, lastName, email, username, password, userType, language} = req.body;
    if(!username || !password){
        return res.status(400).json({ 'message': 'username and password are requested'});
    }

    // Checks if username/email already exists exists
    const duplicate = await User.findOne({username:username}).exec();
    const emailDuplicate = await User.findOne({email:email}).exec();

    // If there is a duplicate return status 409 conflict
    if(duplicate || emailDuplicate){
        // console.log('Email Duplicate');
        return res.sendStatus(409); //There's conflict
    } 
    
    // No duplicates try to create user.
    try{
        // Encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);
        // Create and store new user
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