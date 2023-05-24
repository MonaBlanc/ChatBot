// controller for login
const bcrypt = require('bcrypt');
const User = require('../models/schema');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        // validate request
        if (!req.body)
            return res.status(406).json({ err: "You have to fill the email and password." });
        // get user login data
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(406).json({ err: "Not all fields have been entered." });

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(406).json({ err: "No account with this email." })
        }

        // compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(406).json({ err: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.json({ token, username: user.username, email: user.email });
    }
    catch (error) {
        res.status(500).json({ err: error.message || "Error while logging in" });
    }
};

// controller for register
exports.register = async (req, res) => {
    try {
        // validate request
        if (!req.body)
            return res.status(406).json({ err: "You have to fill the registration form" });

        let { email, password, passwordCheck, username } = req.body;

        if (!email || !password || !passwordCheck)
            return res.status(406).json({ err: "Not all fields have been entered" });

        if (password.length < 8)
            return res.status(406).json({ err: "The password needs to be at least 8 characters long." });

        if (password != passwordCheck)
            return res.status(406).json({ err: "The password must be the same for verification." });

        const hash = await bcrypt.hashSync(password, 10);

        // using doc structure
        const newUser = new User({
            email,
            password: hash,
            username
        })

        newUser
            .save(newUser)
            .then(register => res.json(register))
            .catch(error => {
                res.status(406).json({ err: error.message || "Something went wrong while registration." })
            })
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while registering in" });
    }
};




