const service = require("../services/reservation.services");
 
// Create and Save a new reservation
exports.create = (req, res) => {
  service.create(req, res)
};

// Retrieve all reservations from the database.
exports.findAll = (req, res) => {
  service.findAll(req, res)
};

// Find a single reservation with an id
exports.findOne = (req, res) => {
  service.findOne(req, res)
};

// Update a reservation by the id in the request
exports.update = (req, res) => {
  service.update(req, res)
};

// Delete a reservation with the specified id in the request
exports.delete = (req, res) => {
  service.delete(req, res)
};

// Delete all reservations from the database.
exports.deleteAll = (req, res) => {
  service.deleteAll(req, res)
}

// Find all by date reservations
exports.findAllByDate = (req, res) => {
  service.findAllByDate(req, res)
};