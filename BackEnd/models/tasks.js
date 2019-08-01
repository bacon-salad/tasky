module.exports = function (sequelize, DataTypes) {
    var tasks = sequelize.define("tasks", {
        id: {
            type: DataTypes.integer(30),
            allowNull: false
        },
        head: {
            type: DataTypes.varchar(30),
            allowNull: false
        },
        body: {
            type: DataTypes.varchar(255),
            allowNull: false
        },
        taskeeId: {
            type: DataTypes.integer(30),
            allowNull: false
        },
        //Nforeign
        TaskMasterId: {
            type: DataTypes.integer(30),
            allowNull: false
        },
        //foreign
        completed: {
            type: DataTypes.enum('notYet', 'yes', 'no'),
            allowNull: false,
            defaultValue: 'notYet'
        },
        DateMade: {
            type: DataTypes.date(),
            allowNull: false
        },
        //CURRENT_TIMESTAMP
        DateDone: {
            type: DataTypes.date(),
            allowNull: false
        },
        timeleft: {
            type: DataTypes.integer(),
            allowNull: false
        }
    });
    return tasks;
  };