module.exports = (req, res, next) => {
    if(req.query.user == "Ada" || "Greta" || "Vim" || "Tim"){
        next();
    } else {
        res.send("No tienes privilegios para ingresar");
    }
}