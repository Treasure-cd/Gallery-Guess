import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const BlurImage = ({ onClick }) => {
    return (
      <div>
        <img src="public\Mona_Lisa_blur.jpg" alt="Blurred" className="blurred" />
      <button className="btn" onClick={onClick}>START &nbsp;<FontAwesomeIcon icon={faPlay} /></button>
      </div>
    );
  };
  export default BlurImage;