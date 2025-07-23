const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongoose.connect("mongodb+srv://mark72m:char2N'sLie@cluster0.gw7ljpr.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error Connecting to MongoDb", err);
    });

app.listen(port, () => {
    console.log("Server is runninng on port 8000");
});

const User = require("./models/user");
const Order = require("./models/order");

// Function to send Verification Email to the User
const sendVerificationEmail = async (email, verificationToken) => {
    // Create a node Mailer Transport
    const transporter = nodemailer.createTransport({
        // Configure the email service
        service: "gmail",
        auth: {
            user: "markmutisya72@gmail.com",
            pass: "rtcy gxik hdeh sftu"
        }
    })

    // Compose the email Message
    const mailOptions = {
        from: "amazon.com",
        to: email,
        subject: "Email Verification",
        text: `Please Click the Link to Verify Your Email : http://localhost:8000/verify/${verificationToken}`,
    };

    // Send the Email
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error Sending Verification Email", error)
    }
};



// endpoint to register the app
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if email is already registered
        const existingUser = await UserActivation.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email Already Registered" });
        }

        // Create a new User
        const newUser = new User({ name, email, password });

        // Generate and store Verification Token
        newUser.verificatrionToken = crypto.randomBytes(20).toString("hex");

        // Save User to Database
        await newUser.save();

        //send Verification Email to the User
        sendVerificationEmail(newUser.email, newUser.verificationToken);


    } catch (error) {
        console.log("Error Registering User", error);
        res.status(500).json({ message: "Registration Failed..!" })
    }
});

// Endpoint to verify the email
app.get("/verify/:token", async (req, res) => {
    try {
        const token = req.params.token;

        // Find the User with the given Verification Token
        const user = await User.findOne({verificationToken: token});
        if(!user) {
            return res.status(404).json({message: "Invalid Verification Token"})
        }

        // Mark User as Verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({message: "Email Verified Successfully..!"})

    } catch(error) {
        res.status(500).json({message: "Email Verification Failed..!"})
    }
})