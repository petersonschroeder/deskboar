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

  // Função para formatar a data expirationDate no formato DD/MM/YYYY
  const formatarData = (dataString) => {
    if (!dataString) return "-";
    const data = new Date(dataString);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

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
              <td>{produto.name}</td>
              <td>{produto.brand}</td>
              <td>R$ {produto.price}</td>
              <td>{formatarData(produto.expirationDate)}</td>
              <td>
                <i className="bi bi-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
