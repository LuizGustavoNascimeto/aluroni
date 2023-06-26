import React from "react";
import { CgSearch } from "react-icons/cg";
import styles from "./Buscador.module.scss";

interface Props {
  setBusca: React.Dispatch<React.SetStateAction<string>>;
  busca: string;
}
export default function Buscador({ setBusca, busca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        id="busca"
        type="text"
        placeholder="Buscar"
        value={busca}
        onChange={(evento) => {
          setBusca(evento.target.value);
        }}
      />
      <label htmlFor="busca">
        <CgSearch size={20} color="#4c4d5E" />
      </label>
    </div>
  );
}
