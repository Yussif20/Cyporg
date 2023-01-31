import "./GamingLibraryCard.css";
import SecondaryButton from "../Buttons/SecondaryButton";

const GamingLibraryCard = (props) => {
  return (
    <div className="gaming-library-card">
      <ul>
        <li>
          <img src={props.image} />
        </li>
        <li>
          <h4>{props.title}</h4>
          <span>{props.category}</span>
        </li>
        <li>
          <h4>Date added</h4>
          <span>{props.date_added}</span>
        </li>
        <li>
          <h4>Hours played</h4>
          <span>{props.hours_played}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span>{props.downloaded}</span>
        </li>
        <SecondaryButton>Download</SecondaryButton>
      </ul>
    </div>
  );
};

export default GamingLibraryCard;
