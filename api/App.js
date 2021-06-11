const fs = require("fs");
const express = require("express");
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(cors());
app.use(express.json());
app.use(fileUpload());


const readReservations = () => JSON.parse(fs.readFileSync("./reservations.json").toString());

app.get("/reservations", (req, res) => {
  res.json(readReservations());
});

app.post("/reservations", (req, res) => {
  const body = req.body;
  // Récupère la liste des users
  const reservations = readReservations();

  // test d'unicité email
  
  
  // Création du nouveau user
  const newReservations = {
    id: Math.max(...reservations.map((reservation) => reservation.id)) + 1,
    lastName: body.lastName.toUpperCase(),
    firstName: body.firstName,
    email: body.email,
    numero: body.numero,
    date_reservation: body.date_reservation,
    heure: body.heure,
    experience: body.experience,
  };
  // Ajoute le nouveau user dans le tableau d'users
  reservations.push(newReservations);
  // Ecris dans le fichier pour insérer la liste des users
  fs.writeFileSync("./reservations.json", JSON.stringify(reservations, null, 4));
  res.json({message: 'Réponse enregistré'});
});

app.put("/reservations/:id", (req, res) => {
  const body = req.body;

  // Récupère la liste des users
  const reservations = readReservations();

  // Création du nouveau user

  const id = Number(req.params.id);
  const newReservation = {
    id: id,
    lastName: body.lastName.toUpperCase(),
    firstName: body.firstName,
    email: body.email,
    birthDate: body.birthDate,
    avatarUrl: body.avatarUrl,
    gender: body.gender,
  };

  if (reservations.filter((reservation) => reservation.id !== newReservation.id), reservations.some((reservation) => reservation.email === newReservation.email) ) {
    return res.json({messageError: "Email déjà utilisé"});
  } else {
    // Ajoute le nouveau user dans le tableau d'users
    const newReservations = [...reservations.filter((reservation) => reservation.id !== id), newReservation];
    // Ecris dans le fichier pour insérer la liste des users
    fs.writeFileSync("./user.json", JSON.stringify(newReservations, null, 4));
    res.json(newReservation);
  }
});

app.get("/reservations/:id", (req, res) => {

  // Récupère la liste des users
  const reservations = readReservations();
  const reservation = reservations.find((reservation) => reservation.id === Number(req.params.id));

  res.json(reservation);
});

app.delete("/reservations/:id", (req, res) => {

  // Récupère la liste des users
  const reservations = readReservations();

  // Création du nouveau user

  const id = Number(req.params.id);

  // supprime le user dans le tableau d'users
  const deleteReservation = reservations.filter((user) => user.id !== id);
  // Ecris dans le fichier pour insérer la liste des users
  fs.writeFileSync("./reservation.json", JSON.stringify(deleteReservation, null, 4));
  res.json(deleteReservation);
});

app.listen(6929, () => console.log("server is running"));
