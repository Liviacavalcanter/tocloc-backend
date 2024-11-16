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

  async createSportsPlace(sports_place) {
    const { data, error } = await supabase.from('sports_place').insert([sports_place]);
    if (error) throw new Error(error.message);
    return data;
  }
}

module.exports = SportsPlaceRepository;
