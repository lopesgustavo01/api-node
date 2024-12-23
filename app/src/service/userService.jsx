export const createUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Erro ao criar usuário');
    }
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Erro ao buscar usuários');
    }
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const removeUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Erro ao remover usuário');
    }
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
