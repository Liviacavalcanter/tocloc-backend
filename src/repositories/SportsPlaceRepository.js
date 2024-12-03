const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

class SportsPlaceRepository {
  async getAllSportsPlace() {
    const { data, error } = await supabase.from('sports_place').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async createSportsPlace(sportsPlace) {
    const { data, error } = await supabase.from('sports_place').insert([sportsPlace]).select().single(); // `.single()` garante que retorna apenas o objeto criado
    if (error) throw new Error(error.message);
    return data; // Retorna diretamente o objeto do local criado
  }  
  
  async updateSportsPlace(id, updatedData) {
    const { data, error } = await supabase
      .from('sports_place')
      .update(updatedData) // Atualiza os campos
      .match({ id }) // Filtra pela ID do local esportivo
      .single(); // Retorna um único resultado
    if (error) throw new Error(error.message);
    return data;
  }

  async deleteSportsPlace(id) {
    const { data, error } = await supabase
      .from('sports_place')
      .delete()
      .match({ id }); 
    if (error) throw new Error(error.message);
    return data;
  }

  async getReservationsBySportsPlaceId(sportsPlaceId) {
    const { data, error } = await supabase
      .from('reservation') 
      .select('*')
      .eq('id_local_esportivo', sportsPlaceId); 
    if (error) throw new Error(error.message);
    return data; 
  }


async getAvailabilityBySportsPlaceId(sportsPlaceId) {
  const { data, error } = await supabase
  .from('availability')
  .select('data, hora_inicio, hora_fim, status')
  .eq('id_local_esportivo', sportsPlaceId);
  if (error) throw new Error(error.message);
  return data; 
}

}


module.exports = SportsPlaceRepository;
