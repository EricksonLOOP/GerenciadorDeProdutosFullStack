import React, { useState } from 'react';
import axios from 'axios';

function Post() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/Products', {
                name: name,
                value: value
            });
            console.log('Produto salvo:', response.data);
            setName('');
            setValue('');
        } catch (error) {
            console.error('Erro ao salvar produto:', error);
        }
    };

    return (
        <div className='addProdutos'>
            <h2>Adicionar Produtos</h2>
            <form onSubmit={handleSubmit}>
                <label for="nameProduct">Nome:</label>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="nameProduct"
                />
                <label for="valueProduct">Valor:</label>
                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    id="valueProduct"
                />
                <input
                    type="submit"
                    value="Adicionar"
                    id="enviar"
                    className='btn'
                />
            </form>
        </div>
    );
}

export default Post;
