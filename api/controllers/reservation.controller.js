const db = require("../models");
const Reservations = db.reservations;
const Op = db.Sequelize.Op;
 
// Create and Save a new reservation
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    else if (!req.body.lastName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    else if (!req.body.numero) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    else if (!req.body.date_reservation) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    else if (!req.body.heure) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    else if (!req.body.experience) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a reservation
    const reservation = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      numero: req.body.numero,
      date_reservation: req.body.date_reservation,
      heure: req.body.heure,
      experience: req.body.experience
    };
  
    // Save reservation in the database
    Reservations.create(reservation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the reservation."
        });
      });
  };

// Retrieve all reservations from the database.
exports.findAll = (req, res) => {
  const reservation = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    numero: req.body.numero,
    date_reservation: req.body.date_reservation,
    heure: req.body.heure,
    experience: req.body.experience
  };
  
  Reservations.findAll(reservation)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reservations."
        });
      });
  };

// Find a single reservation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  res.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error retrieving reservation with id=" + id
      });
    });
};

// Update a reservation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Reservations.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "reservation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update reservation with id=${id}. Maybe reservation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error updating reservation with id=" + id
      });
    });
};

// Delete a reservation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Reservations.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "reservation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete reservation with id=${id}. Maybe reservation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||  "Could not delete reservation with id=" + id
      });
    });
};

// Delete all reservations from the database.
exports.deleteAll = (req, res) => {
  Reservations.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} reservations were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all reservations."
      });
    });
};

// Find all by date reservations
exports.findAllByDate = (req, res) => {
Reservations.findAll({ where: { date_reservation: /*mettre la date recupérer a la place du true*/ true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reservations."
      });
    });
};