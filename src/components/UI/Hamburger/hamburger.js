import "./hamburger.css";

const hamburger = (props) => {
  return (
    <div class="hamburger">
      <input type="checkbox" id="check" />
      <div class="hamburger-menu-container">
        <div class="hamburger-menu">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default hamburger;
