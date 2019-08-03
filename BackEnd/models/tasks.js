module.exports = function (sequelize, DataTypes) {
    var tasks = sequelize.define("tasks", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        head: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        taskeeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //Nforeign
        TaskMasterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //foreign
        completed: {
            type: DataTypes.ENUM('notYet', 'yes', 'no'),
            allowNull: false,
            defaultValue: 'notYet'
        },
        DateMade: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        //CURRENT_TIMESTAMP
        DateDone: {
            type: DataTypes.DATE,
            allowNull: false
        },
        timeleft: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return tasks;
  };