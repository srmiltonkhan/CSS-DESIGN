import './ContactCardStyle.css';
import profile from "./contact-profile.jpg"
import { FaEnvelope } from "react-icons/fa";
function App() {
 return(
    <div className="contact-card">
      <div className="contact-profile">
         <img src={profile} alt="" />
      </div>
      <div className="person-personal-info">
        <h2>Milton Hossain</h2>
        <h4>Web Developer</h4>
      </div>
      <div className="person-contact-info">
        <ul>
          <li><i><FaEnvelope /></i> <label>srmiltonkhan@gmail.com</label></li>
          <li><i><FaEnvelope /></i> <label>srmiltonkhan@gmail.com</label></li>
          <li><i><FaEnvelope /></i> <label>srmiltonkhan@gmail.com</label></li>
        </ul>
      </div>
    </div>
 )
}

export default App