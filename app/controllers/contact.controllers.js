exports.cerate = (req, res) => {
    res.send({message: "create handler"});
};
exports.finaAll = (req, res) => {
    res.send({message: "finaAll handler"});
};
exports.findOne = (req, res) => {
    res.send({message: "indOne handler"});
};
exports.update = (req, res) => {
    res.send({message: "update handler"});
};
exports.delete = (req, res) => {
    res.send({message: "delete handler"});
};
exports.cerate = (req, res) => {
    res.deleteAll({message: "deleteAll handler"});
};
exports.findAllFavorite = (req, res) => {
    res.send({message: "findAllFavorite handler"});
};