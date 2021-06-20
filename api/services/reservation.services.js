const dao = require("../DAO/reservation.DAO")

exports.deleteAll = (req, res) => {
    dao.deleteAll(req, res);
}

exports.create = (req, res) => {
    dao.create(req, res);
}

exports.findAll = (req, res) => {
    dao.findAll(req, res);
}

exports.findOne = (req, res) => {
    dao.findOne(req, res);
}

exports.update = (req, res) => {
    dao.update(req, res);
}

exports.delete = (req, res) => {
    dao.delete(req, res);
}

exports.findAllByDate = (req, res) => {
    dao.findAllByDate(req, res);
}