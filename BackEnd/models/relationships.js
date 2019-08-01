module.exports = function (sequelize, DataTypes) {
    var relationships = sequelize.define("relationships", {
        id: {
            type: DataType.integer(32),
            allowNull: false
        },
        MajorId: {
            type: DataType.integer(32),
            allowNull: false
        },//foreign
        MinorId: {
            type: DataType.integer(32),
            allowNull: false
        },//foreign
        TimeStamp: {
            type: DataType.date(),
            allowNull: false
        },//CURRENT_TIMESTAMP
    });
    return relationships;
  };