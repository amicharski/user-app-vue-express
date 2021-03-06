module.exports = (connection, Sequelize) => {
    return connection.define("Login", {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING(20)
        },
        email: {
            type: Sequelize.STRING(254)
        },
        password: {
            type: Sequelize.STRING(64)
        },
        account_type: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        token: {
            type: Sequelize.STRING(128)
        },
        token_expiration: {
            type: Sequelize.DATE
        },
        require_password_at_login: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false
    });
};
