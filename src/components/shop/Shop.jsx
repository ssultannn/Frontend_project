import "./style.css";
import controller from "../../images/controller.png";
import { Link } from "react-router-dom";
function Shop() {
  return (
    <div className="shop">
      <div className="shop-h1">
        <h1>SHOP BY CATEGORY</h1>
      </div>
      <div className="shop-flex">
        <div>
          <Link to="/product/%20/consoles">
            <img
              src="https://static.wixstatic.com/media/c837a6_e9de4ca4cb7a4cbc9c9e0098bcf68fa4~mv2.jpg/v1/fill/w_750,h_563,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e9de4ca4cb7a4cbc9c9e0098bcf68fa4~mv2.jpg"
              alt=""
            />
          </Link>
          <h4>Consoles</h4>
        </div>
        <div>
          <Link to="/product/%20/accessories">
            <img
              src="https://static.wixstatic.com/media/11062b_4989637a82034fa288055deda20c1f41~mv2.jpg/v1/fill/w_2565,h_2730,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Gamer%20Workspace.jpg"
              alt=""
            />
          </Link>
          <h4>Accessories</h4>
        </div>
        <div>
          <Link to="/product/%20/controllers">
            <img src={controller} alt="" />
          </Link>
          <h4>Controllers</h4>
        </div>
      </div>
    </div>
  );
}
export default Shop;
