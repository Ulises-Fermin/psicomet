import { useHistory } from "react-router-dom";
import styles from "./Tarjeta_chat.module.css";

const Tarjeta_chat = (props) => {
  const history = useHistory();
  function handleOpenchat() {
    history.push(`/chats/${props.usuario.id}`);
  }
};

export default Tarjeta_chat;
