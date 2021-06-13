import "./MainBody.css";

import BodyForm from "./bodyComponent/BodyForm";

import Recomendation from "./bodyComponent/Recomendation";
import Highlight from "./bodyComponent/Highlight";

const MainBody = () => {
  return (
    <div className="main">
      <BodyForm />
      <Recomendation />
      <Highlight />
    </div>
  );
};

export default MainBody;
