const service = require("../services/reservation.services");
const Op = db.Sequelize.Op;
 
// Create and Save a new reservation
exports.create = (req, res) => {
  service.create
};

// Retrieve all reservations from the database.
exports.findAll = (req, res) => {
  service.findAll
};

// Find a single reservation with an id
exports.findOne = (req, res) => {
  service.findOne
};

// Update a reservation by the id in the request
exports.update = (req, res) => {
  service.update
};

// Delete a reservation with the specified id in the request
exports.delete = (req, res) => {
  service.delete
};

// Delete all reservations from the database.
exports.deleteAll = (req, res) => {
  service.deleteAll
}

// Find all by date reservations
exports.findAllByDate = (req, res) => {
  service.findAllByDate
};