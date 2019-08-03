module.exports = function (sequelize, DataTypes) {
    var relationships = sequelize.define("relationships", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        MajorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },//foreign
        MinorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },//foreign
        TimeStamp: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },//CURRENT_TIMESTAMP
    });
    return relationships;
  };