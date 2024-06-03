const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const reservasRoutes = require('./routes/reservasRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Hotel Reservations API',
      version: '1.0.0',
      description: 'API for managing hotel reservations',
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: ['./routes/reservasRoutes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use('/api', reservasRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Gestión de Reservas de Hoteles');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
