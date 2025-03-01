import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BlurImage = () => {
  const navigate = useNavigate();
    return (
      <div>
        <img src="public\Mona_Lisa_blur.jpg" alt="Blurred" className="blurred" />
      <button className="btn" onClick={() => navigate("/play")}>START &nbsp;<FontAwesomeIcon icon={faPlay} /></button>
      </div>
    );
  };
  export default BlurImage;