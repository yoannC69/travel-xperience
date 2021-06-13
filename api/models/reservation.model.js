module.exports = (sequelize, Sequelize) => {
  const Reservations = sequelize.define("reservations", {
    id: {
      type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
    },
    firstName: {
      type: Sequelize.STRING(255), allowNull:false
    },
    lastName: {
      type: Sequelize.STRING, allowNull:false
    },
    numero: {
      type: Sequelize.INTEGER, allowNull:false
    },
    date_reservation: {
      type: Sequelize.DATE, allowNull:false
    },
    heure: {
      type: Sequelize.TIME, allowNull:false
    },
    experience: {
      type: Sequelize.STRING, allowNull:false
    }
  });

  return Reservations;
};