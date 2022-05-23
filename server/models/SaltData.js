module.exports = (sequelize, DataTypes) => {

    const SaltData = sequelize.define("SaltData", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        saltLevel: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });

    SaltData.associate = (models) => {
        SaltData.hasMany(models.Notes, {
            onDelete: "cascade",
        });
    }

    return SaltData;
}