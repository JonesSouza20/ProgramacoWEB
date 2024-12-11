const routeStats = {};

function contador(req, res, next) {
    const route = req.path;
    routeStats[route] = (routeStats[route] || 0) + 1;
    next();
};

module.exports = { contador, routeStats };