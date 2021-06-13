module.exports = app => {
    const reservations = require("../controllers/reservation.controller.js");
  
    var router = require("express").Router();
  
    // Create a new reservation
    router.post("/", reservations.create);
  
    // Retrieve all reservations
    router.get("/", reservations.findAll);
  
    // Retrieve all published reservations
    router.get("/date", reservations.findAllByDate);
  
    // Retrieve a single reservation with id
    router.get("/:id", reservations.findOne);
  
    // Update a reservation with id
    router.put("/:id", reservations.update);
  
    // Delete a reservation with id
    router.delete("/:id", reservations.delete);
  
    // Delete all reservations
    router.delete("/", reservations.deleteAll);

    app.use('/reservations', router);
  };