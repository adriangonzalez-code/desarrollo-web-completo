async function obtenerEmpleados() {
    const archivo = 'js/39-Fetch-API/empleados.json';

    /*fetch(archivo)
        .then(res => res.json())
        .then(data => {
            const { empleados } = data;

            empleados.forEach(empleado => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
            });
        });*/

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();