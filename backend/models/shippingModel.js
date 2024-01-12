// module.exports = (sequelize, DataTypes, Model) => {
//     class Shipping extends Model {}
//     Shipping.init(
//       {
//         // Model attributes are defined here
//         id: {
//           type: DataTypes.INTEGER,
//           autoIncrement: true,
//           primaryKey: true,
//         },
//         sale_id: {
//           type: DataTypes.INTEGER,
//           allowNull: false,
//         },
//         address: {
//             type: DataTypes.STRING(255),
//             allowNull: true,
//         },
//         phone: {
//             type: DataTypes.INTEGER,
//             allowNull: true,
//         },
//         name: {
//             type: DataTypes.STRING(100),
//             allowNull: false,
//         },
//         sum_total: {
//             type: DataTypes.FLOAT,
//             allowNull: false,
//         },
//         status: {
//             type: DataTypes.STRING(100),
//             allowNull: false,
//         },
        
//       },
//       {
//         // Other model options go here
//         sequelize, // We need to pass the connection instance
//         modelName: "BookGenre", // We need to choose the model name
//         timestamps: false,
//       }
//     );
//     return BookGenre;
//   };
  