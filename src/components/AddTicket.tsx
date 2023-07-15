import { useNavigate } from "react-router-dom";
import addIcon from "../assets/images/mais.svg";

const AddTicket = () => {
  const navigate = useNavigate();

  const addNewTicket = () => {
    navigate("/newTicket");
  };
  return (
    <div className="addContainer" onClick={addNewTicket}>
      <img src={addIcon} alt="Adicionar chamado" />
    </div>
  );
};

export default AddTicket;
