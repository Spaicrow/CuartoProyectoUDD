
const fs = require('fs');
const path = require('path');

const data = [
  {
    id: 1,
    hotel: 'Hotel Sunshine',
    fecha: '2024-06-10',
    tipo_habitacion: 'Doble',
    estado: 'Confirmada',
    num_huespedes: 2
  },
  // Agrega más reservas si es necesario
];

fs.writeFileSync(path.join(__dirname, 'reservas.json'), JSON.stringify(data, null, 2), 'utf8');
