import React, { useEffect, useState } from 'react';
import { deleteUser, fetchUsers } from '../controllers/userControllers';

const List = () => {
  const [items, setItems] = useState([]);

  const handleDelete = (id) => {
    // Filtra a lista para remover o item com o id passado
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  useEffect(() => {
    // Função assíncrona dentro do useEffect
    const getUsers = async () => {
      try {
        const list = await fetchUsers();  // Espera pela resposta da API
        console.log(list);  // Verifica o que foi retornado
        setItems(list);  // Atualiza o estado com a lista de usuários
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    getUsers();  // Chama a função assíncrona para buscar os usuários
  }, []);

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name} - {item.age} - {item.email}</span>
            <button onClick={() => handleDelete(item.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
