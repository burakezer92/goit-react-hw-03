import "./Contact.css";
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Contact({ id, name, number, onDeleteItem }) {
  return (
    <div className="card">
      <div className="left">
        <div className="element">
          <FaRegUser />
          {name}
        </div>
        <div className="element">
          <FiPhone />
          {number}
        </div>
      </div>
      <div className="rigth">
        <button onClick={() => onDeleteItem(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Contact;
