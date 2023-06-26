import React, { useState, useEffect } from "react";
import cardapio from "data/cardapio.json";
import styles from "./Itens.module.scss";
import Item from "./Item";
import { Cardapio } from "types/Prato";

interface Props {
  busca: string;
  ordenador: string;
  filtro: number | null;
}
export default function Itens({ busca, ordenador, filtro }: Props) {
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }
  function testaFiltro(id: number) {
    if (filtro !== null) {
      return filtro === id;
    }
    return true;
  }
  function ordenar(novaLista: Cardapio) {
    switch (ordenador) {
      case "porcao":
        return novaLista.sort((a, b) => (a.size < b.size ? 1 : -1));
      case "qtd_pessoa":
        return novaLista.sort((a, b) => (a.serving < b.serving ? 1 : -1));
      case "preco":
        return novaLista.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return novaLista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
