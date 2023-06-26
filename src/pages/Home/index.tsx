import cardapio from "data/cardapio.json";
import styles from "./Home.module.scss";
import stylesTema from "styles/Temas.module.scss";
import nossaCasa from "assets/nossa_casa.png";
import { useNavigate } from "react-router-dom";
import { Prato } from "types/Prato";

export default function Home() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();
  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/prato/${prato.id}`, { state: { prato } });
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((prato) => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendados__imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(prato)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Av. Comendador Norberto Marcondes, 1033 <br /> <br /> Camorão - PR
        </div>
      </div>
    </section>
  );
}
