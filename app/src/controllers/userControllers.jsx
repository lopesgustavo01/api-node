import { createUser, getUsers, removeUser } from '../service/userService';

export const handleFormSubmit = async (formData) => {
  try {
    const response = await createUser(formData);
    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
    } else {
      console.error('Erro ao cadastrar usuário:', response.statusText);
      alert('Erro ao cadastrar usuário.');
    }
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    alert('Erro ao conectar com a API.');
  }
};

export const fetchUsers = async () => {
  try {
    const users = await getUsers();
    return users;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    alert('Erro ao conectar com a API.');
    return [];
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await removeUser(id);
    if (response.ok) {
      alert('Usuário excluído com sucesso!');
    } else {
      console.error('Erro ao excluir usuário:', response.statusText);
      alert('Erro ao excluir usuário.');
    }
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    alert('Erro ao conectar com a API.');
  }
};
