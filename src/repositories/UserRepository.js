const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

class UserRepository {
  async getAllUsers() {
    const { data, error } = await supabase.from('user').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async createUser(user) {
    const { data, error } = await supabase.from('user').insert([user]);
    if (error) throw new Error(error.message);
    return data;
  }
}

module.exports = UserRepository;
