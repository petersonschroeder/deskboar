import React, { useEffect, useState } from "react";
import "../styles/Lista.scss";

export function Lista() {
const [produtos, setProdutos] = useState([]);

useEffect(() => {
async function fetchProdutos() {
    try {
    const response = await fetch(
        "https://api-node-test-6c4b0a5d4c87.herokuapp.com/products"
    );
    if (!response.ok) {
        throw new Error("Erro na resposta da API: " + response.status);
    }
    const data = await response.json();
    console.log("Resposta da API:", data);

    if (!Array.isArray(data)) {
        console.error("Resposta da API não é um array:", data);
        return;
    }

    setProdutos(data);
    } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    }
}
fetchProdutos();
}, []);

return (
<div className="lista-container">
    <h2>Produtos</h2>
    <table className="tabela-produtos">
    <thead>
        <tr>
        <th>Nome</th>
        <th>Marca</th>
        <th>Preço</th>
        <th>Validade</th>
        <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        {produtos.map((produto) => (
        <tr key={produto.id || produto._id}>
            <td>{produto.nome || produto.name}</td>
            <td>{produto.marca || produto.brand}</td>
            <td>R$ {produto.preco || produto.price}</td>
            <td>31/03/2026</td>
            <td><i className="bi bi-trash"></i></td>
        </tr>
        ))}
    </tbody>
    </table>
</div>
);
}
