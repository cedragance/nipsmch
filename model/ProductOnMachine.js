const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class ProductOnMachine extends Sequelize.Model {}
	ProductOnMachine.init({
	  id: {
		type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
	  num: Sequelize.INTEGER,
	  name: Sequelize.STRING,
	  time: Sequelize.FLOAT,
	  changedBy: {
		type: Sequelize.BIGINT,
		field: 'changed_by'
	  }
	  },
	  {
		sequelize, 
		modelName: 'productOnMachine', 
		tableName: 'products_on_machines',
		underscored: true,
		timestamps: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	  }
	);
	
	return ProductOnMachine;
}
