import "./Recomendation.css";

import image from "../../../assests/img/youtube.png";

import RecommendationList from "./RecommendationList";

const Recomendation = (props) => {
  return (
    <div className="recomendation default-width">
      <form className="select__search">
        <i className="fas fa-th-large"></i>
        <select name="" id="sites">
          <option value="">Top Sites</option>
        </select>
      </form>
      <div className="recomendation__results">
        <RecommendationList image={image} name="Youtube" />
        <RecommendationList image={image} name="Youtube" />
        <RecommendationList image={image} name="Youtube" />
        <RecommendationList image={image} name="Youtube" />
        <RecommendationList image={image} name="Youtube" />
        <RecommendationList image={image} name="Youtube" />
        <RecommendationList image={image} name="Youtube" />
        <RecommendationList image={image} name="Youtube" />
      </div>
    </div>
  );
};

export default Recomendation;
