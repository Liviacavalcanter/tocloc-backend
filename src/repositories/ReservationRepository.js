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
  
  async updateReservation(id, updatedData) {
    const { data, error } = await supabase
      .from('reservation')
      .update(updatedData) 
      .match({ id }) 
      .single(); 
  
    if (error) {
      console.error("Erro ao atualizar reserva:", error.message);
      throw new Error(error.message); 
    }
  
    return data;
  }

  async deleteReservation(id) {
    const { data, error } = await supabase
      .from('reservation')
      .delete()
      .match({ id }); 
    if (error) throw new Error(error.message);
    return data;
  }
  
  async getAllReservationsWithDetails() {
    const { data, error } = await supabase
      .from('reservation')
      .select(`
        id,
        data_reserva,
        status,
        id_local_esportivo (
          id,
          nome,
          localizacao
        ),
        id_disponibilidade (
          id,
          data,
          hora_inicio,
          hora_fim
        )
      `);
  
    if (error) {
      console.error('Erro ao buscar reservas com detalhes:', error.message);
      throw new Error(error.message);
    }
  
    return data;
  }
}

module.exports = ReservationRepository;