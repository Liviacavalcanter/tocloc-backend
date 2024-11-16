const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

class ReservationRepository {
  async getAllReservations() {
    const { data, error } = await supabase.from('reservation').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async createReservation(reservation) {
    const { data, error } = await supabase.from('reservation').insert([reservation]);
    if (error) throw new Error(error.message);
    return data;
  }
}

module.exports = ReservationRepository;
