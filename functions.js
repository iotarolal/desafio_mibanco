const {Transaccion, Cuenta } = requiere('./models.js')


// reciso los parametros
const accion =  process.argv[2]

if (accion == "nuevatra") {

    const cuentaid  = parseInt(process.argv[3]);
    const montocuenta  = parseInt(process.argv[4]);
    nueva_transaccion(cuentaid, montocuenta)

} else if(accion == "listar") {
    const cuentaid  = parseInt(process.argv[3]);
    consultar(cuentaid);

} else if(accion == "consultar") {


}

// Consulta transacciones
async function consulta() {
    const transacciones = await Transaccion.findAll({
        limited : 10,        
    });

    Console.log(transacciones)
}




async function nueva_transaccion(cuenta) {
    await Transaccion.create({
        descripcion: descripcion,
        monto: monto,
        cuentaId: cuentaId
    });
}







async function insertar(descripcion, monto, cuentaId) {
    await Transaccion.create({
        descripcion: descripcion,
        fecha: fecha,
        monto: monto,
        cuentaId: cuentaId
    });
}

async function cuenta(saldo) {
    await Cuenta.create({
        saldo: saldo
    });
}

/* async function consulta(cuenta) {
    const transacciones = await Transaccion.findByPk(cuenta);
    console.log(` Las ultimas 10 transacciones de la cuenta ${cuenta} son : `);
    console.log(transacciones.dataValues);
} */

async function init() {
    await sql.sync();

    if (process.argv[2] == "insertar") {
        try {
            insertar(process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
        } catch (err) {
            console.log("El error es el siguiente: " + err);
        }
    }

    if (process.argv[2] == 'cuenta') {
        try {
            cuenta(process.argv[3]);
        } catch (err) {
            console.log("El error es el siguiente: " + err);
        }
    }

    if (process.argv[2] == 'consulta') {
        try {
            consulta(process.argv[3]);
        } catch (err) {
            console.log("El error es el siguiente: " + err);
        }
    }

}

init();