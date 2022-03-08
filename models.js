const Sequelize = require('sequelize');

// conexion a bd
const sql = new Sequelize(
    'banco', 'postgres', '1234', {
        host: 'localhost',
        dialect: 'postgres'
    }
);




const Transaccion = sql.define('Transaccion', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    },

    monto: {
        type: Sequelize.DECIMAL(10, 1),
        allowNull: false
    },

}, {
    tableName : 'Transaciones'
    })

//CREATE TABLE cuenta (id INT, saldo DECIMAL CHECK (saldo >= 0) );
const Cuenta = sql.define('Cuenta', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    saldo: {
        type: Sequelize.DECIMAL(10, 1),
        allowNull: false,
        defaultValue: 100
    }
});

Cuenta.hasMany(Transaccion);
Transaccion.belongsTo(Cuenta);


async function init() {
    await sql.sync()
    await Cuenta.create({
        saldo:20000
    })
}

//init();

module.exports = {Cuenta, Transaccion};
