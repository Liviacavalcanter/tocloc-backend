const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

class AvailabilityRepository {
  async getAllAvailabilities() {
    const { data, error } = await supabase.from('availability').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async createAvailability(availability) {
    const { data, error } = await supabase.from('availability').insert([availability]);
    if (error) throw new Error(error.message);
    return data;
  }
  async updateAvailability(id, updatedData) {
    const { data, error } = await supabase
      .from('availability')
      .update(updatedData) 
      .match({ id })
      .single(); 
    if (error) throw new Error(error.message);
    return data;
  }

  async deleteAvalability(id) {
    const { data, error } = await supabase
      .from('availability')
      .delete()
      .match({ id });
    if (error) throw new Error(error.message);
    return data;
  }
}

module.exports = AvailabilityRepository;
