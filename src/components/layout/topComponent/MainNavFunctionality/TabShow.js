import Hamburger from "../../../UI/Hamburger/hamburger";

const TabShow = (props) => {
  return (
    <div class="tab__show">
      <button>
        <i class="fas fa-grip-lines-vertical"></i>
      </button>
      <button>
        <i class="far fa-credit-card"></i>
      </button>
      <button>
        <i class="fas fa-user-circle"></i>
      </button>
      <Hamburger />
    </div>
  );
};

export default TabShow;
