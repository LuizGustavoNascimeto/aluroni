import { ReactComponent as NotFoundImage } from "assets/not_found.svg";
import styles from "./NotFound.module.scss";
import stylesTemas from "styles/Temas.module.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTemas.container]: true,
      })}
    >
      <div className={styles.voltar}>
        <button
          onClick={() => {
            navigate(-1); //volta para a tela anterior da "pilha" no histórico
          }}
        >
          {"< Voltar"}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}
