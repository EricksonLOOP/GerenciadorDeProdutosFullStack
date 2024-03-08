import React, { useState } from 'react';
import axios from 'axios';
import trash from '../estilos/img/trash.png';
import atualizar from '../estilos/img/atualizar.png';


function ControllerAll() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [visibleIds, setVisibleIds] = useState([]);
    const toggleVisibility = (id) => {
        if (visibleIds.includes(id)) {

            setVisibleIds(visibleIds.filter(item => item !== id));
        } else {
            setVisibleIds([...visibleIds, id]);
        }
    };

    const handleClick = () => {
        axios.get('http://localhost:8080/Products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Erro ao obter todos os produtos:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/Products/${id}`)
            .then(response => {
                setProducts(products.filter(product => product.idProduct !== id));
                console.log("Deletado com sucesso: " + id);
            })
            .catch(error => {
                console.error('Erro ao deletar o produto:', error);
            });
    };

    const handleUpdate = (id) => {
        axios.put(`http://localhost:8080/Products/${id}`, {
            name: name,
            value: value
        })
            .then(response => {
                console.log("Produto atualizado com sucesso:", response.data);
            })
            .catch(error => {
                console.error('Erro ao atualizar o produto:', error);
            });
    };

    return (
        <div className='produtosDiv'>
            <button onClick={handleClick} className='btn btnShow'>Atualizar <img src={atualizar} alt="Atualizar" className='icons atualizar' /> </button>
            {products.map(product => (
                <div key={product.idProduct} className='produtos'>
                    <div className='prodGrid'>
                        <h4>Produto: {product.name}</h4>
                        <span className='valor'><strong>Valor: R${product.value}</strong></span>
                    </div>
                    <div className='modgrid'>
                        <button className='btn-prod' onClick={() => handleDelete(product.idProduct)}><img src={trash} alt='Deletar' className='icons' /></button>
                        <button className='btn-prod' onClick={() => toggleVisibility(product.idProduct)}><img src={atualizar} alt='Deletar' className='icons' /></button>
                        <div className={visibleIds.includes(product.idProduct) ? 'visible' : 'hidden'} id={product.idProduct}>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome do produto" />
                            <input type="number" value={value} onChange={e => setValue(e.target.value)} placeholder="Valor do produto" />
                            <button onClick={() => { handleUpdate(product.idProduct) }}>Atualizar Produto</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ControllerAll;
