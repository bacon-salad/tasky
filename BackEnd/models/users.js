module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        id: {
            type: DataTypes.integer(10),
            allowNull: false
        },
        //foreign
        TMid: {
            type: DataTypes.integer(10),
            allowNull: false
        },
        Name: {
            type: DataTypes.varchar(30),
            allowNull: false
        },
        password: {
            type: DataTypes.varchar(30),
            allowNull: false
        },
        email: {
            type: DataTypes.varchar(30),
            allowNull: false
        },
        phone: {
            type: DataTypes.varchar(13),
            allowNull: false
        },
        taskmaster: {
            type: DataTypes.boolean(),
            allowNull: false,
            defaultValue: ''
        },
        //CURRENT_TIMESTAMP
        TimeStamp: {
            type: DataTypes.boolean(),
            allowNull: false
        }
    });
    return users;
  };