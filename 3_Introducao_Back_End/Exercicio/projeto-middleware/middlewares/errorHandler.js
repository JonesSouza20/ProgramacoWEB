const errorHandler = (req, res, next, err) => {
    console.error(err.stack);
    res.status(500).send({error: 'Something went wrong!'})
};

module.exports = errorHandler;