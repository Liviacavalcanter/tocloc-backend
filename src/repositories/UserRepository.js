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

  /**
   * Cria um novo usuário no banco de dados.
   * @param {Object} user - Dados do usuário a ser criado.
   */
  async createUser(user) {
    const { data, error } = await supabase.from('user').insert([user]);
    if (error) {
      console.error('Erro ao inserir usuário:', error.message);
      throw new Error(error.message);
    }
    return data;
  }

  /**
   * Busca um usuário pelo e-mail.
   * @param {string} email 
   * @returns {Object|null} 
   */
  async findByEmail(email) {
    const { data, error } = await supabase
      .from('user')
      .select('*')
      .eq('email', email)
      .single(); // Retorna um único registro

    if (error) {
      if (error.code === 'PGRST116') return null; // Caso o usuário não seja encontrado
      console.error('Erro ao buscar usuário por email:', error.message);
      throw new Error(error.message);
    }

    return data;
  }

  async updateUser(id, updates) {
    const { data, error } = await supabase
      .from('user')
      .update(updates)
      .match({ id }) // Filtra pela ID do local esportivo
      .single(); // Retorna um único resultado
  
    if (error) {
      console.error('Erro ao atualizar usuário:', error.message);
      throw new Error(error.message);
    }
  
    return data;
  }

  async deleteUser(id) {
    const { data, error } = await supabase
      .from('user')
      .delete()
      .match({ id }); 
  
    if (error) {
      console.error('Erro ao deletar usuário:', error.message);
      throw new Error(error.message);
    }
  
    return data;
  }
  
  
}

module.exports = UserRepository;
