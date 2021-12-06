const fs = require('fs');
module.exports = (req, res, next) => {
    fs.writeFileSync("./src/logs/userLogs.txt", "El usuario ingresó a la ruta: " + req.url);
    next();
}