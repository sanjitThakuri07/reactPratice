import "./Highlight.css";

const Highlight = () => {
  return (
    <div class="default-width highlight">
      <form class="select__search">
        <i class="fas fa-star"></i>
        <select name="" id="sites">
          <option value="">Top Highlight</option>
        </select>
      </form>
      <div class="highlight__box">
        <i class="fas fa-star"></i>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim est
          quibusdam doloremque quisquam commodi reiciendis earum eum in
          cupiditate?
        </p>
      </div>
    </div>
  );
};

export default Highlight;
