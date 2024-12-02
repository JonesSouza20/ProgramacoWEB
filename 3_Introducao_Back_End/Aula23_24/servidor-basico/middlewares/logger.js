const Logger = require('./middlewares/logger');
const autenticar = require('./middleware/autenticar');

app.use(Logger);
app.use('./rotas/usuario', autenticar, usuarioRouter);
