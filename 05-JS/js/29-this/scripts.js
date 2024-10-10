// This
const reservacion = {
    nombre: 'Adrian',
    apellido: 'Gonzalez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    total: 3000,
    pagado: true,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();