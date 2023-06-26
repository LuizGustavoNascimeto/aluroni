import TagsPrato from "components/TagsPrato";
import cardapio from "data/cardapio.json";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Pratos.module.scss";
import NotFound from "pages/NotFound";
export default function Pratos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find((item) => item.id === Number(id));
  const { title, description, photo } = {
    ...prato,
  };

  if (!prato) {
    return <NotFound />;
  }
  function voltarPagina() {
    navigate(-1);
  }
  return (
    <>
      <button className={styles.voltar} onClick={voltarPagina}>
        {"< Voltar"}
      </button>
      <div className={styles.container}>
        <h1 className={styles.titulo}>{title}</h1>
        <div className={styles.imagem}>
          <img src={photo} alt={title} />
        </div>
        <div className={styles.conteudo}>
          <div className={styles.conteudo__descricao}>{description}</div>
          <TagsPrato {...prato} />
        </div>
      </div>
    </>
  );
}
