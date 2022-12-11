const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const token = req?.headers?.authorization?.split(" ")[1];

    if (token) {

        jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256']  }, (error, decoded) => {
            console.log(process.env.SECRET_KEY);
            if (error) {
                res.status(403).json({
                    message: "Access token Invalid",
                    error
                }) 
            }

            req.email = decoded.email;
            req.name = decoded.name;
        });




        next();

       

    } else {
        res.status(401).json({
            message: "Access token required!"
        })
    }
}

module.exports = validateToken;