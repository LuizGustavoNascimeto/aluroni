import classNames from "classnames";
import { Prato } from "types/Prato";
import styles from "./Item.module.scss";
import TagsPrato from "components/TagsPrato";
import { useNavigate } from "react-router-dom";

type Props = Prato;

export default function Item(props: Props) {
  const navigate = useNavigate();

  const { title, description, photo, id } = props;
  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />7
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}
