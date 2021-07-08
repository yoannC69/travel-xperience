module.exports = app => {
    const reservations = require("../controllers/reservation.controller.js");
    //const auth = require("../middleware/auth");
  
    var router = require("express").Router();
  
    // Create a new reservation
    router.post("/",/*auth,*/ reservations.create);
  
    // Retrieve all reservations
    router.get("/",/*auth,*/ reservations.findAll);
  
    // Retrieve all published reservations
    router.get("/date",/*auth,*/ reservations.findAllByDate);
  
    // Retrieve a single reservation with id
    router.get("/:id",/*auth,*/ reservations.findOne);
  
    // Update a reservation with id
    router.put("/:id",/*auth,*/ reservations.update);
  
    // Delete a reservation with id
    router.delete("/:id",/*auth,*/ reservations.delete);
  
    // Delete all reservations
    router.delete("/",/*auth,*/ reservations.deleteAll);

    app.use('/reservations', router);
  };  