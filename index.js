require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();

// Configura o cliente Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Permitir acesso ao front-end

// Importa os controllers
const userController = require('./src/controllers/UserController');
const sportsPlaceController = require('./src/controllers/SportsPlaceController');
const availabilityController = require('./src/controllers/AvailabilityController');
const reservationController = require('./src/controllers/ReservationController');

// Conecta as rotas ao app
app.use('/api/users', userController);
app.use('/api/sports-places', sportsPlaceController);
app.use('/api/availabilities', availabilityController);
app.use('/api/reservations', reservationController);

// Inicia o servidor na porta 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
