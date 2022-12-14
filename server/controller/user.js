
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

/**
 * @description API to create a User
 * @param {*} req
 * @param {*} res
 */
const registerUser = async (req, res) => {

  try {
    const data = req.body;

    // Password Encryption
    const encryptedPassword = await bcrypt.hash(data.password, 10);

    const userData = await User.create({
      name: data.name,
      email: data.email,
      password: encryptedPassword,
      contact: data.contact,
    });

    return res.status(201).json({
      message: "User Registered succesfully",
      data: userData,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @description API to fetch all Users from DB
 * @param {*} req
 * @param {*} res
 */
const getUser = (req, res) => {

  User.find()
    .then((result) => {

      const data = result.map((user) => {
        return {
          name: user.name,
          email: user.email,
        };
      })

      return res.status(200).json({
        message: "Succesfully fetched all Users",
        data,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};

/**
 * @description API to fetch User of a particular user from DB
 * @param {*} req
 * @param {*} res
 */
const getUserById = (req, res) => {

 console.log(req.email, "incoming email");

  User.findOne({ _id: req.params.id })
    .then((result) => {
      return res.status(200).json({
        message: "Succesfully fetched User!",
        data: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
      });
    });
};



const loginUser = async (req, res) => {
    const data = req.body;

    const foundUser = await  User.findOne({ email: data.email.toLowerCase() });
    
    if (foundUser) {

        // This returns true or false
        const isValidPassword = await bcrypt.compare(data.password, foundUser.password);

        if (isValidPassword) {

            const accessToken = jwt.sign({
                name: foundUser.name,
                email: foundUser.email
            }, process.env.SECRET_KEY)

            res.status(200).json({
                message: "User Logged in!",
                token: accessToken,
                user: foundUser
            })
        } else {
            res.status(401).json({
                message: "Incorrect Password"
            })
        }

    } else {
        res.status(404).json({
            message: "User doesn't exist, please register!"
        })
    }
}

module.exports = {
  registerUser,
  getUser,
  getUserById,
  loginUser
};
