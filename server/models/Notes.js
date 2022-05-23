module.exports = (sequelize, DataTypes) => {

    const Notes = sequelize.define("Notes", {
        noteText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    });

    

    return Notes;
}