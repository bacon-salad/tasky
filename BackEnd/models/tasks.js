module.exports = function (sequelize, DataTypes) {
    var tasks = sequelize.define("tasks", {
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
        //CURRENT_TIMESTAMP
        DateDone: {
            type: DataTypes.DATE,
            allowNull: true
        },
        timeleft: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return tasks;
  };