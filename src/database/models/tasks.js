module.exports = (sequelize, dataTypes) => {
  let alias = 'Tasks';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          autoIncrement: true
      },
 
      task_name: {
          type: dataTypes.STRING(100),
          allowNull: false
      },
      completed: {
          type: dataTypes.BIGINT(10),
          allowNull: false
      }
  };
  let config = {
      timestamps: false,
      //createdAt: 'created_at',
      //updatedAt: 'updated_at',
      deletedAt: false
  }
  const Tasks = sequelize.define(alias, cols, config); 

  return Tasks
};