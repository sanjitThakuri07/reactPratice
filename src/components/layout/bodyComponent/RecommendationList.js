const RecommendationList = (props) => {
  return (
    <div className="recomendation__result">
      <div className="recomendation-image">
        <img src={props.image} alt="" />
      </div>
      <span>{props.name}</span>
    </div>
  );
};

export default RecommendationList;
