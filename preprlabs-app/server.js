require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOption');
const verifyJWT = require('./middleware/verifyJWT');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection');
const credentials = require('./middleware/credentials');
const cookieParser = require('cookie-parser');
const { OAuth2Client } = require('google-auth-library');
const jwt = require("jsonwebtoken");
const GoogleUser = require('./models/GoogleUsers');
const PORT = process.env.PORT || 3500;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

//Connect to MongoDB
connectDB();
app.use(credentials);

app.use(cors(corsOptions));

// Built-in middleware
app.use(express.urlencoded( { extended:false } ));
app.use(express.json());
app.use(cookieParser());

let DB = [];

async function verifyGoogleToken(token) {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: GOOGLE_CLIENT_ID,
      });
      return { payload: ticket.getPayload() };
    } catch (error) {
      return { error: "Invalid user detected. Please try again" };
    }
};

app.post('/googleRegister', async (req,res)=>{
    try {
        if(req.body.credential){
            const verificationResponse = await verifyGoogleToken(req.body.credential);

            if(verificationResponse.error){
                return res.status(400).json({
                    message: verificationResponse.error,
                });
            };

            const profile = verificationResponse?.payload;
            const emailDuplicate = await GoogleUser.findOne({email:profile?.email}).exec();
            DB.push(profile);

            if(emailDuplicate){
                return res.sendStatus(409); //There's conflict
            }

            try {
                const result = await GoogleUser.create({
                    'firstName': profile?.given_name,
                    'lastName': profile?.given_name,
                    'email': profile?.email,
                    'userType': 'learner',
                });
                console.log('Account creation successful!');
                res.status(201).json({
                    message: 'Sign up was successful!',
                    user:{
                        firstName: profile?.given_name,
                        lastName: profile?.family_name,
                        picture: profile?.picture,
                        email: profile?.email,
                        token: jwt.sign({
                            email: profile?.email
                        }, process.env.GOOGLE_CLIENT_SECRET, {expiresIn: '1d'}),
                    }
                });

            } catch (error) {
                res.status(500).json({'message':error.message});
            }
        };
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error occured. Registration failed.",
        });
    }
});

app.post("/googleAuth", async (req, res)=>{
    try {
        if(req.body.credential){
            const verificationResponse = await verifyGoogleToken(req.body.credential);
            if(verificationResponse.error){
                return res.status(400).json({
                    message: verificationResponse.error,
                });
            }

            const profile = verificationResponse?.payload;
            const existsInDB = await GoogleUser.findOne({email:profile?.email}).exec();

            if(!existsInDB){
                return res.status(400).json({
                    message: "You are not registered. Please sign up!",
                });
            }

            console.log('Log in successful!');
            res.status(201).json({
                message: "Login was successful!",
                user:{
                    firstName: profile?.given_name,
                    lastName: profile?.family_name,
                    picture: profile?.picture,
                    email: profile?.email,
                    token: jwt.sign({
                        email: profile?.email}, process.env.GOOGLE_CLIENT_SECRET,{
                            expiresIn:"1d"
                        }),
                }
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error?.message || error,
        });
    }
});



//Is this the routes used to do the command?
app.use('/register/create', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use(verifyJWT);
app.use('/users', require('./routes/api/users'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});