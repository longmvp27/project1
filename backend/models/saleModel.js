module.exports = (sequelize, DataTypes, Model) => {
  class Sale extends Model {}
  Sale.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shipping_method: {
        type: DataTypes.ENUM,
        values: ["shipping", "in_store"],
        allowNull: false,
      },
      sum_total: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Sale", // We need to choose the model name
      timestamps: false,
    }
  );
  return Sale;
};
