import React, { useState } from "react";
import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { OpcoesOrdenador } from "types/OpcoesOrdenador";

interface Props {
  ordenador?: OpcoesOrdenador;
  setOrdenador: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: ordenador,
      })}
      onBlur={() => setAberto(false)}
      onClick={() => setAberto(!aberto)}
    >
      <span>{nomeOrdenador || "ordenar por"}</span>
      {aberto ? (
        <MdKeyboardArrowUp size={24} />
      ) : (
        <MdKeyboardArrowDown size={24} />
      )}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div
            key={opcao.value}
            className={styles.ordenador__option}
            onClick={() => setOrdenador(opcao.value as OpcoesOrdenador)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
