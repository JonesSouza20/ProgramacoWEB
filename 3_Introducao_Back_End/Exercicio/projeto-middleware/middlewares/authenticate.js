const authenticate = (req, res, next) => {
    const apikey = req.headers['x-api-key'];
    if (apikey === '12345') {
        next();
    } else {
        res.status(401).send({eror:'Unauthorized: Invalid API Key'})
    };
};

module.exports = authenticate;