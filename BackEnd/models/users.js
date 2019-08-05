var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            created_at: {
                type: 'TIMESTAMP',
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updated_at: {
                type: 'TIMESTAMP',
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }
        },
        //foreign
        TMid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
            },
        phone: {
                type: DataTypes.STRING,
                allowNull: true
            },
        taskmaster: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
        });

    // Creating a custom method for our User model. This will check if an unhashed password entered by the users can be compared to the hashed password stored in our database
    users.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    users.beforeCreate(function (Users) {
        Users.password = bcrypt.hashSync(Users.password, bcrypt.genSaltSync(10), null);
    });
    return users;
};