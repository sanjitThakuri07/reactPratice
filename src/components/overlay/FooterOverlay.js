import "./FooterOverlay.css";

const FooterOverlay = (props) => {
  return (
    <div className="footerOverlay">
      <div className="footerOverlay-content">
        <div className="content top__content">
          <i class="fas fa-redo"></i>
          <p>Message From FireFox</p>
        </div>
        <div className="content sub__content">
          <i class="fas fa-chevron-circle-down"></i>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
            ipsam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterOverlay;
